import React from 'react';
import { COLORS, SPACING } from '../../constants/designTokens';

const SocialIcons = () => {
  const socialLinks = [
    { name: 'twitter', color: COLORS.TWITTER, icon: '🐦' },
    { name: 'instagram', color: COLORS.INSTAGRAM, icon: '📷' },
    { name: 'facebook', color: COLORS.FACEBOOK, icon: '📘' },
    { name: 'discord', color: COLORS.DISCORD, icon: '🎮' },
  ];

  return (
    <div className="social-icons" style={{ display: 'flex', gap: SPACING.GAP_SM }}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href="#"
          className="social-icon"
          style={{
            width: '28px',
            height: '28px',
            backgroundColor: social.color,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <span style={{ fontSize: '14px' }}>{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 