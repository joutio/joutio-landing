const forms = document.querySelectorAll<HTMLFormElement>("form[data-form]");

type Tone = "success" | "error" | "info";

function setStatus(form: HTMLFormElement, message: string, tone: Tone) {
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
}

for (const form of forms) {
  const endpoint = form.dataset.endpoint?.trim() ?? "";
  const fallbackEmail = form.dataset.fallbackEmail?.trim() ?? "contact@joutio.com";
  const kind = form.dataset.formKind ?? "form";
  const encoding = form.dataset.encoding ?? "form";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();

    if (!email) {
      setStatus(form, "Renseigne ton e-mail.", "error");
      return;
    }

    if (!endpoint) {
      const mailSubject =
        kind === "waitlist"
          ? "Liste d'attente Joutio"
          : `Contact Joutio${subject ? ` — ${subject}` : ""}`;
      const mailBody =
        kind === "waitlist"
          ? `Inscris-moi à la liste d'attente : ${email}`
          : `${message}\n\n— ${email}`;
      const href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      window.location.href = href;
      setStatus(
        form,
        `Ton client mail s'ouvre. Tu peux aussi écrire à ${fallbackEmail}.`,
        "success",
      );
      return;
    }

    const button = form.querySelector<HTMLButtonElement>("button[type=submit]");
    const label = button?.textContent ?? "";
    if (button) {
      button.disabled = true;
      button.textContent = "Envoi…";
    }
    setStatus(form, "Envoi en cours…", "info");

    try {
      const payload = new URLSearchParams();
      data.forEach((value, key) => payload.append(key, String(value)));
      payload.append("source", kind);
      payload.append("page", window.location.pathname);

      const response = await fetch(endpoint, {
        method: "POST",
        headers:
          encoding === "json"
            ? { "Content-Type": "application/json", Accept: "application/json" }
            : {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json",
              },
        body: encoding === "json" ? JSON.stringify(Object.fromEntries(payload)) : payload,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      form.reset();
      setStatus(
        form,
        kind === "waitlist"
          ? "C'est noté. On te prévient dès que Joutio arrive sur ton téléphone."
          : "Message envoyé. On te répond sous deux jours ouvrés.",
        "success",
      );
    } catch {
      setStatus(
        form,
        `L'envoi a échoué. Réessaie ou écris à ${fallbackEmail}.`,
        "error",
      );
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = label;
      }
    }
  });
}
