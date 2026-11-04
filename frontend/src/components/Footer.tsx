
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-links" aria-label="Navigation de pied de page">
        <a className="footer-link" href="#contact">
          Contact
        </a>

        <span className="footer-separator" aria-hidden="true">
          ·
        </span>

        <a className="footer-link" href="#mentions-legales">
          Mentions légales
        </a>
      </nav>

      {/* <p className="footer-copyright">
        © 2026 CodeLearnWay
      </p> */}
    </footer>
  );
}

export default Footer;
