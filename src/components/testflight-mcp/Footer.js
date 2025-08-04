import React from 'react';
import { COLORS, TYPOGRAPHY, SPACING } from '../../constants/designTokens';
import SocialIcons from './SocialIcons';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer 
      className="footer"
      style={{
        backgroundColor: COLORS.PRIMARY_OBJECT.FOOTER_BG,
        padding: `${SPACING.PADDING_LG} ${SPACING.PADDING_XL}`,
        marginTop: 'auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: SPACING.GAP_LG,
        width: '100%',
      }}>
        {/* Logo */}
        <Logo />
        
        {/* Divider */}
        <div style={{
          width: '1px',
          height: '30px',
          backgroundColor: COLORS.TEXT_SECONDARY,
          opacity: 0.5,
          display: 'flex',
        }} />
        
        {/* Social Icons */}
        <SocialIcons />
        
        {/* Copyright */}
        <p style={{
          color: COLORS.TEXT_SECONDARY,
          fontSize: TYPOGRAPHY.SIZE_SM,
          fontWeight: TYPOGRAPHY.WEIGHT_NORMAL,
          fontFamily: TYPOGRAPHY.FONT_SECONDARY,
          margin: 0,
          textAlign: 'center',
          flex: '1 1 auto',
        }}>
          Copyright © 2022 CyberFlow Digital Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 