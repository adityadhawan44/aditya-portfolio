import { Link } from 'react-router-dom';
import { siteMeta } from '../data/siteData';

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="section-eyebrow">Connect</p>
        <h2 className="footer-title">Let&apos;s build something that feels serious and memorable.</h2>
      </div>

      <div className="footer-links">
        <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
        <a href="tel:+919654689325">{siteMeta.phone}</a>
        <a href={siteMeta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <Link to="/contact">Contact page</Link>
      </div>
    </footer>
  );
}

export default Footer;
