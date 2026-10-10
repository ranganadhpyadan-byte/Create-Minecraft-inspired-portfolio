import { BookOpen, Compass, Pickaxe } from 'lucide-react'
import { personal } from '../data/personal'
import { PixelCard } from './PixelCard'

export function About() {
  return (
    <section className="section-shell section-about" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-cube" /> PLAYER PROFILE</p>
        <h2 id="about-title">The adventurer <span>behind the build.</span></h2>
        <p className="section-intro">A little about what I’m learning and the worlds I like to make.</p>
      </div>
      <div className="about-grid">
        <PixelCard className="profile-card">
          <div className="profile-card__header">
            <span className="inventory-icon" aria-hidden="true"><Pickaxe size={21} /></span>
            <div><small>PLAYER PROFILE</small><h3>{personal.name}</h3></div>
            <span className="level-badge">IN PROGRESS</span>
          </div>
          <div className="profile-card__body">
            <div className="profile-card__portrait">
              <img src="/images/profile.jpg" alt="" loading="lazy" />
            </div>
            <div className="profile-facts">
              <p className="fact-label">CURRENT QUEST</p>
              <p className="fact-value">{personal.role}</p>
              <p className="fact-label">WORLD</p>
              <p className="fact-value">{personal.university}</p>
              <p className="profile-motto">Learning through hands-on projects.</p>
            </div>
          </div>
          <div className="inventory-slots" aria-label="Interests">
            <span><BookOpen size={15} aria-hidden="true" /> Fundamentals</span>
            <span><Compass size={15} aria-hidden="true" /> Problem solving</span>
            <span><Pickaxe size={15} aria-hidden="true" /> Building projects</span>
          </div>
        </PixelCard>
        <div className="about-copy">
          {personal.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-note">
            <span aria-hidden="true">✦</span>
            <p>My goal here: keep learning, make useful things, and share the process one block at a time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
