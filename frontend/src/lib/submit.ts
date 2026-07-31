/// <reference types="vite/client" />

// Same-origin in production (host nginx routes /api -> backend container).
const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) ?? '/api'

// Google Apps Script Web App that receives the contact-form consultations.
export const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwsnzvmwdvGb_wpCwjloByzXZr3ZZpI6GdMPna3irl7Oaw37NFMnxrUvmXoXdoQIgO3/exec'

export class SubmitError extends Error {}

interface SubmitOptions {
  /** Target URL. Defaults to the same-origin backend submissions API. */
  endpoint?: string
  /**
   * Request Content-Type. Defaults to application/json.
   * Use 'text/plain;charset=utf-8' for Google Apps Script so the request stays
   * a CORS "simple request" and skips the preflight Apps Script cannot answer.
   */
  contentType?: string
}

/**
 * POST a form payload to a submissions endpoint.
 * Resolves on 2xx; throws SubmitError (with a user-facing message) otherwise.
 * Shared by every form on the site.
 */
export async function submitForm(
  payload: Record<string, unknown>,
  { endpoint = `${API_BASE}/v1/submissions`, contentType = 'application/json' }: SubmitOptions = {},
): Promise<void> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': contentType },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    if (!res.ok) {
      let message = 'Something went wrong. Please try again.'
      try {
        const body = await res.json()
        if (body?.error?.message) message = body.error.message
      } catch {
        /* non-JSON error body — keep the default message */
      }
      throw new SubmitError(message)
    }
  } catch (err) {
    if (err instanceof SubmitError) throw err
    throw new SubmitError('Network error. Please check your connection and try again.')
  } finally {
    clearTimeout(timeout)
  }
}
