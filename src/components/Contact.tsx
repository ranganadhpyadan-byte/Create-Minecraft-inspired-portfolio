import { useState } from 'react'
import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from 'lucide-react'
import { personal } from '../data/personal'
import { ContactForm } from './ContactForm'

export function Contact() {
  const [emailRevealed, setEmailRevealed] = useState(false)
  const [phoneRevealed, setPhoneRevealed] = useState(false)

  return (
    <section className="section-shell section-contact" id="contact" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-cube" /> OPEN PORTAL</p>
        <h2 id="contact-title">Let’s build <span>something useful.</span></h2>
        <p className="section-intro">Have a question or want to connect? Leave a message draft or find me on these profiles.</p>
      </div>
      <div className="contact-grid">
        <ContactForm />
        <aside className="contact-aside" aria-label="Contact information">
          <div className="contact-aside__location"><MapPin size={17} aria-hidden="true" /> {personal.location}</div>
          <div className="contact-details">
            <h3>Direct lines</h3>
            <p className="contact-note">Details are revealed when selected. Anything shown on a website can still be copied or scraped.</p>
            <div className="reveal-row">
              <Mail size={17} aria-hidden="true" />
              {emailRevealed
                ? <a href={`mailto:${personal.email}`}>{personal.email}</a>
                : <button type="button" onClick={() => setEmailRevealed(true)}>Reveal email</button>}
            </div>
            <div className="reveal-row">
              <Phone size={17} aria-hidden="true" />
              {phoneRevealed
                ? <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                : <button type="button" onClick={() => setPhoneRevealed(true)}>Reveal phone</button>}
            </div>
          </div>
          <div className="social-card">
            <h3>Find me online</h3>
            <a href={personal.github} target="_blank" rel="noreferrer"><Code2 size={18} aria-hidden="true" /> GitHub <span>@ranganadhpyadan-byte</span></a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} aria-hidden="true" /> LinkedIn <span>View profile</span></a>
          </div>
        </aside>
      </div>
    </section>
  )
}
