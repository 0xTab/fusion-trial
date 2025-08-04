import React from 'react';
import { COLORS, TYPOGRAPHY, SPACING } from '../../constants/designTokens';

const Navigation = () => {
  const navItems = [
    { text: 'HOME', active: true },
    { text: 'NEWS', active: false },
    { text: 'ROADMAP', active: false },
    { text: 'CONTACT US', active: false },
  ];

  return (
    <nav className="navigation" style={{ display: 'flex', gap: SPACING.GAP_XL }}>
      {navItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="nav-item"
          style={{
            color: item.active ? COLORS.TEXT_PRIMARY : COLORS.TEXT_PRIMARY,
            fontSize: TYPOGRAPHY.SIZE_LG,
            fontWeight: item.active ? TYPOGRAPHY.WEIGHT_SEMIBOLD : TYPOGRAPHY.WEIGHT_NORMAL,
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
            opacity: item.active ? 1 : 0.8,
          }}
          onMouseEnter={(e) => e.target.style.opacity = 1}
          onMouseLeave={(e) => e.target.style.opacity = item.active ? 1 : 0.8}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default Navigation; 