import { Code2, Cpu, Layers3, Wrench } from 'lucide-react'
import { skills, type SkillCategory } from '../data/skills'
import { PixelCard } from './PixelCard'

const categoryIcons: Record<SkillCategory, typeof Code2> = {
  Programming: Code2,
  'Web basics': Layers3,
  'AI & algorithms': Cpu,
  Tools: Wrench,
}

const categories: SkillCategory[] = ['Programming', 'Web basics', 'AI & algorithms', 'Tools']

export function Skills() {
  return (
    <section className="section-shell section-skills" id="skills" aria-labelledby="skills-title">
      <div className="section-heading section-heading--center">
        <p className="eyebrow"><span className="eyebrow-cube" /> INVENTORY</p>
        <h2 id="skills-title">Tools in my <span>hotbar.</span></h2>
        <p className="section-intro">Skills and topics listed in my current portfolio—no proficiency scores, just what I’m working with.</p>
      </div>
      <div className="skill-categories">
        {categories.map((category) => {
          const Icon = categoryIcons[category]
          const entries = skills.filter((skill) => skill.category === category)

          return (
            <div className="skill-group" key={category}>
              <h3><Icon size={16} aria-hidden="true" /> {category}</h3>
              <div className="skill-grid">
                {entries.map((skill) => (
                  <PixelCard className="skill-slot" key={skill.name}>
                    <span className="skill-slot__icon" aria-hidden="true">{skill.icon}</span>
                    <span className="skill-slot__name">{skill.name}</span>
                    <span className="skill-slot__detail">{skill.detail}</span>
                  </PixelCard>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
