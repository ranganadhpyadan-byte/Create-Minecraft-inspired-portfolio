import { useState } from 'react'
import { personal } from '../data/personal'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav-shell mx-auto flex w-full max-w-7xl items-center justify-between px-5" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${personal.name}, home`}>
          <span className="brand-block" aria-hidden="true">P</span>
          <span>PY<span className="brand-accent">.DEV</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-resume" href={personal.resume} download>
            Resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
