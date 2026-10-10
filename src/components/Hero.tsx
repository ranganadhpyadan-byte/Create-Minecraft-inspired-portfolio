import { ArrowDown, ArrowRight, BriefcaseBusiness, Code2, MapPin } from 'lucide-react'
import { personal } from '../data/personal'
import { PixelButton } from './PixelButton'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__scene" aria-hidden="true" />
      <div className="hero__ground" aria-hidden="true" />
      <div className="hero__content mx-auto grid w-full max-w-7xl items-center px-5">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-cube" /> A DEVELOPER'S WORLD</p>
          <p className="hero-kicker">{personal.role}</p>
          <h1 id="hero-title">
            {personal.firstName}
            <span>{personal.lastName}<i>.</i></span>
          </h1>
          <p className="hero-description">{personal.introduction}</p>
          <p className="location-chip"><MapPin size={15} aria-hidden="true" /> {personal.location}</p>
          <div className="hero-actions">
            <PixelButton href="#projects" variant="green">
              View My Projects <ArrowRight size={17} aria-hidden="true" />
            </PixelButton>
            <PixelButton href="#contact" variant="stone">Contact Me</PixelButton>
            <a className="resume-link" href={personal.resume} download>
              Download Resume <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)">
              <Code2 size={17} aria-hidden="true" /> GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
              <BriefcaseBusiness size={17} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-art__sun" aria-hidden="true" />
          <div className="hero-art__frame">
            <span className="frame-corner frame-corner--top" aria-hidden="true" />
            <img
              src="/images/profile.jpg"
              alt="Voxel-style adventurer illustration supplied with the portfolio materials"
              fetchPriority="high"
            />
          </div>
          <div className="hero-art__caption">
            <span className="status-dot" /> BUILDING MY NEXT WORLD
          </div>
          <span className="pixel-star pixel-star--one" aria-hidden="true">✦</span>
          <span className="pixel-star pixel-star--two" aria-hidden="true">✧</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  )
}
