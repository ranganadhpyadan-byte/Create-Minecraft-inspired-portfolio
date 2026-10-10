import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { personal } from '../data/personal'

export function ContactForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.reportValidity()) {
      setStatus('Please check the highlighted fields and try again.')
      return
    }

    const formData = new FormData(form)
    const subject = String(formData.get('subject'))
    const body = [
      `Name: ${String(formData.get('name'))}`,
      `Email: ${String(formData.get('email'))}`,
      '',
      String(formData.get('message')),
    ].join('\n')
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setStatus('An email draft is being opened. This site has not sent or stored your message.')
    window.location.href = mailto
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <span className="form-heading__icon"><Send size={17} aria-hidden="true" /></span>
        <div><h3>Send a message</h3><p>It opens in your email app—nothing is sent from this site.</p></div>
      </div>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Name" minLength={2} maxLength={80} required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required />
        </label>
      </div>
      <label>
        <span>Subject</span>
        <input name="subject" type="text" placeholder="What would you like to talk about?" maxLength={120} required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} placeholder="Write your message..." minLength={10} maxLength={3000} required />
      </label>
      <button className="pixel-button pixel-button--green form-submit" type="submit">
        Open email draft <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  )
}
