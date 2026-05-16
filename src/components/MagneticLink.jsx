import { Link } from 'react-router-dom';
import { useRef } from 'react';

function MagneticLink({ children, className = '', to, href, target, rel }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    element.style.setProperty('--mx', `${offsetX * 0.16}px`);
    element.style.setProperty('--my', `${offsetY * 0.16}px`);
  };

  const handleLeave = () => {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty('--mx', '0px');
    element.style.setProperty('--my', '0px');
  };

  const sharedProps = {
    className: `${className} magnetic-link`.trim(),
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    ref,
  };

  if (to) {
    return (
      <Link {...sharedProps} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <a {...sharedProps} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

export default MagneticLink;
