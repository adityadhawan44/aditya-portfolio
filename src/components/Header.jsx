import { NavLink } from 'react-router-dom';
import { navigation, siteMeta } from '../data/siteData';

function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand-lockup" to="/">
        <span className="brand-mark">AB</span>
        <span className="brand-text">{siteMeta.name}</span>
      </NavLink>

      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
