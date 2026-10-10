import { ArrowUpRight, Code2 } from 'lucide-react'
import { projects } from '../data/projects'
import { PixelCard } from './PixelCard'

export function Projects() {
  return (
    <section className="section-shell section-projects" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-cube" /> BUILT IN THIS WORLD</p>
        <h2 id="projects-title">A few things <span>I’ve made.</span></h2>
        <p className="section-intro">Project details are taken from my portfolio repository. Artwork below is an original illustration, not a screenshot.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <PixelCard className="project-card" key={project.name}>
            <div className="project-card__image">
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
              <span className="project-index">WORLD ITEM 0{index + 1}</span>
            </div>
            <div className="project-card__body">
              <div className="project-card__heading">
                <h3>{project.name}</h3>
                <span className="project-type">PROJECT</span>
              </div>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label="Technologies">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">
                <Code2 size={17} aria-hidden="true" /> View repository <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </PixelCard>
        ))}
      </div>
      <p className="project-footnote">Both project cards point to the single repository provided; no separate project URLs or live demos were listed.</p>
    </section>
  )
}
