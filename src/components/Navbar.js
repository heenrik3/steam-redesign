import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [changed, setChanged] = useState(false)

  const navItems = [
    { to: '/', icon: 'fa-solid fa-store', title: 'Loja' },
    { to: '/biblioteca', icon: 'fa-solid fa-folder', title: 'Biblioteca' },
    { to: '/amigos', icon: 'fa-solid fa-users', title: 'Amigos' },
  ]

  function handleChange(e) {
    setChanged(!changed)
  }

  return (
    <nav className="navbar">
      <picture className="navbar__logo">
        <img src="assets/steam.png" alt="logo"></img>
      </picture>

      <ul className="navigation">
        {navItems.map((item, i) => {
          return (
            <li className={`navigation__item `} key={i}>
              <Link
                to={item.to}
                className={`navigation__link ${
                  window.location.pathname === item.to
                    ? 'navigation__link--active'
                    : null
                }`}
                onClick={handleChange}
              >
                <i className={`navigation__icon ${item.icon}`}></i>
                <span>{item.title.toUpperCase()}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* <div className="navbar__actions">
        <button className="navbar__config">
          <i className="fa-solid fa-gear"></i> Configurações
        </button>
      </div> */}
    </nav>
  )
}

export default Navbar
