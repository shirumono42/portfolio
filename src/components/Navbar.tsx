import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../assets/monmon.png'

const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'info', label: 'Info' },
  { id: 'works', label: 'Works' },
  { id: 'links', label: 'Links' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link className="navbar__logo" to="/">
          <img src={logoImage} alt="Portfolio" />
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <nav className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              className="navbar__link"
              to={{ pathname: '/', hash: `#${item.id}` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
