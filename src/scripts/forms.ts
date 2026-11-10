/**
 * Formulaires (`WaitlistForm`, `ContactForm`) : validation en ligne, envoi (bouton en chargement), confirmation à
 * la place du formulaire, échec en ligne avec repli par e-mail. Sans endpoint configuré, ouvre le client mail.
 * Sans JavaScript, le formulaire part vers son `action`.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Control = HTMLInputElement | HTMLTextAreaElement;

function setError(control: Control, message: string | null) {
  const field = control.closest<HTMLElement>("[data-field]");
  const error = field?.querySelector<HTMLElement>("[data-field-error]");
  const text = field?.querySelector<HTMLElement>("[data-field-message]");
  if (message) control.setAttribute("aria-invalid", "true");
  else control.removeAttribute("aria-invalid");
  if (error && text) {
    error.hidden = !message;
    text.textContent = message ?? "";
  }
}

function invalid(control: Control) {
  const value = control.value.trim();
  if (control.required && !value) return true;
  return control.type === "email" && value !== "" && !EMAIL.test(value);
}

function validate(form: HTMLFormElement) {
  let first: Control | null = null;
  for (const control of form.querySelectorAll<Control>("input[data-error], textarea[data-error]")) {
    const bad = invalid(control);
    setError(control, bad ? control.dataset.error || null : null);
    if (bad && !first) first = control;
  }
  first?.focus();
  return !first;
}

for (const form of document.querySelectorAll<HTMLFormElement>("form[data-form]")) {
  const root = form.closest<HTMLElement>("[data-form-root]");
  const success = root?.querySelector<HTMLElement>("[data-form-success]");
  const failure = form.querySelector<HTMLElement>("[data-form-failure]");
  const submit = form.querySelector<HTMLButtonElement>("button[type=submit]");
  const spinner = submit?.querySelector<SVGElement>("[data-loading]");
  const endpoint = form.dataset.endpoint?.trim() ?? "";
  const fallbackEmail = form.dataset.fallbackEmail?.trim() ?? "contact@joutio.com";
  const kind = form.dataset.formKind ?? "form";

  // L'erreur s'efface dès la saisie.
  form.addEventListener("input", (event) => {
    const control = event.target as Control;
    if (control.getAttribute("aria-invalid")) setError(control, null);
  });

  const done = () => {
    form.hidden = true;
    if (success) success.hidden = false;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (failure) failure.hidden = true;
    if (!validate(form)) return;

    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();

    if (!endpoint) {
      const mailSubject = kind === "contact" ? `Contact Joutio${subject ? ` — ${subject}` : ""}` : "Liste d'attente Joutio Premium";
      const mailBody = kind === "contact" ? `${message}\n\n— ${email}` : `Préviens-moi à la sortie de Premium : ${email}`;
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      done();
      return;
    }

    if (submit) {
      submit.disabled = true;
      submit.setAttribute("aria-busy", "true");
    }
    if (spinner) spinner.removeAttribute("hidden");

    try {
      const payload = new URLSearchParams();
      data.forEach((value, key) => payload.append(key, String(value)));
      payload.append("source", kind);
      payload.append("page", window.location.pathname);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
        body: payload,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      done();
    } catch {
      if (failure) failure.hidden = false;
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.removeAttribute("aria-busy");
      }
      if (spinner) spinner.setAttribute("hidden", "");
    }
  });
}
