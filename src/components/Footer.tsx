import { ArrowUp } from 'lucide-react'
import { personal } from '../data/personal'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner mx-auto flex w-full max-w-7xl items-center justify-between px-5">
        <a className="brand" href="#home">
          <span className="brand-block" aria-hidden="true">P</span><span>PY<span className="brand-accent">.DEV</span></span>
        </a>
        <p>Made with curiosity by {personal.name}.</p>
        <a className="back-to-top" href="#home">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
