import { BookOpenCheck, GraduationCap } from 'lucide-react'
import { personal } from '../data/personal'
import { PixelCard } from './PixelCard'

export function Education() {
  return (
    <section className="section-shell section-education" id="education" aria-labelledby="education-title">
      <div className="section-heading section-heading--center">
        <p className="eyebrow"><span className="eyebrow-cube" /> JOURNEY LOG</p>
        <h2 id="education-title">The learning <span>path.</span></h2>
        <p className="section-intro">A confirmed waypoint from my existing portfolio.</p>
      </div>
      <div className="education-path">
        <span className="path-marker" aria-hidden="true"><GraduationCap size={19} /></span>
        <PixelCard className="education-card">
          <div className="education-card__top">
            <span className="education-icon"><BookOpenCheck size={20} aria-hidden="true" /></span>
            <span className="education-status"><i /> {personal.status}</span>
          </div>
          <p className="education-label">CURRENT EDUCATION</p>
          <h3>{personal.degree}</h3>
          <p className="education-school">{personal.university}</p>
          <p className="education-detail">Artificial Intelligence &amp; Machine Learning</p>
        </PixelCard>
      </div>
    </section>
  )
}
