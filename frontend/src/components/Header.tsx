
import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a
        className="logo"
        href="#accueil"
        aria-label="CodeLearnWay, accueil"
      >
        <span className="logo-icon" aria-hidden="true">
          &lt;/&gt;
        </span>

        <span className="logo-wordmark">
          <span className="logo-code">Code</span>
          <span className="logo-learn">Learn</span>
          <span className="logo-way">Way</span>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOpen}
        aria-controls="header-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div
        className={`header-menu ${menuOpen ? 'is-open' : ''}`}
        id="header-menu"
      >
        <nav
          className="navigation"
          aria-label="Navigation principale"
        >
          <a
            className="nav-link"
            href="#parcours"
            onClick={() => setMenuOpen(false)}
          >
            Parcours
          </a>

          <a
            className="nav-link"
            href="#a-propos"
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="signup-button"
            href="#inscription"
            onClick={() => setMenuOpen(false)}
          >
            Inscription
          </a>

          <a
            className="login-button"
            href="#connexion"
            onClick={() => setMenuOpen(false)}
          >
            Connexion
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
