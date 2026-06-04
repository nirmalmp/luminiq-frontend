/**
 * submitQuote — single point where the quote form sends its data.
 *
 * Currently a stub so the form is fully interactive without a backend.
 * Later, wire this to a Google Form WITHOUT touching the UI:
 *
 *   1. Create the Google Form with matching fields and grab each field's
 *      `entry.<id>` name (View source of the live form, or use the prefilled-link trick).
 *   2. POST to the form's `formResponse` endpoint with `mode: 'no-cors'`:
 *
 *      const body = new URLSearchParams({
 *        'entry.1111111111': data.name,
 *        'entry.2222222222': data.email,
 *        'entry.3333333333': data.phone,
 *        'entry.4444444444': data.address,
 *        'entry.5555555555': data.service,
 *        'entry.6666666666': data.date,
 *        'entry.7777777777': data.message,
 *      });
 *      await fetch('https://docs.google.com/forms/d/e/<FORM_ID>/formResponse', {
 *        method: 'POST', mode: 'no-cors', body,
 *      });
 *      return { ok: true }; // no-cors responses are opaque; assume success
 *
 *   (A Google Apps Script web app endpoint works the same way and can return JSON.)
 *
 * This runs client-side, so it works on the static GitHub Pages export.
 */
export async function submitQuote(data) {
  // TODO: replace this stub with the Google Form / Apps Script call above.
  console.log('submitQuote (stub):', data);
  await new Promise((resolve) => setTimeout(resolve, 600)); // simulate latency
  return { ok: true };
}
