import React, { useState } from 'react';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, LAYOUT } from '../../constants/designTokens';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', email);
  };

  return (
    <section 
      className="contact-section"
      style={{
        padding: `${SPACING.PADDING_2XL} ${SPACING.PADDING_MD}`,
        maxWidth: LAYOUT.CONTAINER_LG,
        margin: '0 auto',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Contact Form */}
      <div style={{
        maxWidth: '806px',
        margin: '0 auto',
        backgroundColor: 'rgba(130, 148, 161, 0.56)',
        borderRadius: '53px',
        padding: SPACING.PADDING_XL,
        position: 'relative',
        backdropFilter: 'blur(10px)',
      }}>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          gap: SPACING.GAP_MD,
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              minWidth: '300px',
              padding: `${SPACING.PADDING_MD} ${SPACING.PADDING_LG}`,
              fontSize: TYPOGRAPHY.SIZE_XL,
              fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
              color: COLORS.TEXT_PRIMARY,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              opacity: 0.4,
              borderRadius: BORDER_RADIUS.MD,
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.BACKGROUND_DARK,
              border: 'none',
              borderRadius: '25px',
              padding: `${SPACING.PADDING_MD} ${SPACING.PADDING_LG}`,
              fontSize: TYPOGRAPHY.SIZE_LG,
              fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              minWidth: '188px',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 16px rgba(66, 235, 174, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Ask us!
          </button>
        </form>
      </div>

      {/* Contact Text */}
      <p style={{
        fontSize: TYPOGRAPHY.SIZE_XL,
        fontWeight: TYPOGRAPHY.WEIGHT_NORMAL,
        color: COLORS.TEXT_PRIMARY,
        marginTop: SPACING.MARGIN_XL,
        lineHeight: TYPOGRAPHY.LEADING_NORMAL,
        letterSpacing: '2%',
        maxWidth: '800px',
        margin: '40px auto 0 auto',
      }}>
        If you have any questions, please contact us, we are happy to help!
      </p>
    </section>
  );
};

export default ContactSection; 