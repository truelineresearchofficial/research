import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Contact from '../Contact'

afterEach(() => vi.restoreAllMocks())

function renderContact() {
  return render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  )
}

// Fill all visible text fields (scholar variant has 5) — honeypot is aria-hidden,
// so getAllByRole('textbox') excludes it.
async function fillAll(user: ReturnType<typeof userEvent.setup>, email = 'a@b.com') {
  const boxes = screen.getAllByRole('textbox')
  for (const box of boxes) {
    await user.type(box, box.getAttribute('type') === 'email' ? email : 'x')
  }
}

describe('Contact form', () => {
  it('submits the scholar payload and shows the success view on 2xx', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ id: 'x', status: 'received' }) })
    vi.stubGlobal('fetch', fetchMock)
    const user = userEvent.setup()

    renderContact()
    await fillAll(user)
    await user.click(screen.getByRole('button', { name: /book a consultation/i }))

    await waitFor(() => expect(screen.getByText(/Thank you/i)).toBeInTheDocument())
    expect(fetchMock).toHaveBeenCalledOnce()
    const body = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(body).toMatchObject({ form_type: 'contact', variant: 'scholar', email: 'a@b.com' })
    expect(body.website).toBe('') // honeypot empty
  })

  it('shows an inline error when the API rejects', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ error: { message: 'Too many submissions.' } }),
      }),
    )
    const user = userEvent.setup()

    renderContact()
    await fillAll(user)
    await user.click(screen.getByRole('button', { name: /book a consultation/i }))

    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent('Too many submissions.'),
    )
  })
})
