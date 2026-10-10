import { personal } from './personal'

export type Project = {
  name: string
  description: string
  technologies: string[]
  image: string
  imageAlt: string
  repository: string
}

export const projects: Project[] = [
  {
    name: 'AI Path Finder — BFS Visualizer',
    description:
      'An AI-based path-finding project using the Breadth-First Search (BFS) algorithm. It applies graph-search concepts to identify paths between nodes and presents the concept through a web-based interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'BFS', 'Graph theory'],
    image: '/images/projects/project1.svg',
    imageAlt: 'Original voxel-style grid illustration with a highlighted route',
    repository: personal.repository,
  },
  {
    name: 'Personal Portfolio / Web Project',
    description:
      'A personal web project focused on a structured frontend experience, responsive layout, and clear presentation of projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'Web design', 'GitHub'],
    image: '/images/projects/project2.svg',
    imageAlt: 'Original voxel-style illustration of a portfolio workstation',
    repository: personal.repository,
  },
]
