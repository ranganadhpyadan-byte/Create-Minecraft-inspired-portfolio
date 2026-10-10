export type SkillCategory =
  | 'Programming'
  | 'Web basics'
  | 'AI & algorithms'
  | 'Tools'

export type Skill = {
  name: string
  category: SkillCategory
  detail: string
  icon: string
}

export const skills: Skill[] = [
  { name: 'C', category: 'Programming', detail: 'Programming language', icon: 'C' },
  { name: 'Python', category: 'Programming', detail: 'Programming language', icon: 'Py' },
  { name: 'HTML', category: 'Web basics', detail: 'Web development', icon: '<>' },
  { name: 'CSS', category: 'Web basics', detail: 'Web development', icon: '{ }' },
  { name: 'JavaScript', category: 'Web basics', detail: 'Web project technology', icon: 'JS' },
  {
    name: 'Artificial Intelligence & Machine Learning',
    category: 'AI & algorithms',
    detail: 'Current area of study',
    icon: 'AI',
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'AI & algorithms',
    detail: 'Problem solving',
    icon: 'DS',
  },
  { name: 'Breadth-First Search', category: 'AI & algorithms', detail: 'Graph search', icon: 'BFS' },
  { name: 'Git & GitHub', category: 'Tools', detail: 'Version control', icon: 'GH' },
]
