import React from 'react';
import { COLORS, TYPOGRAPHY, SPACING, LAYOUT, BORDER_RADIUS } from '../../constants/designTokens';

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{
        padding: `${SPACING.PADDING_3XL} ${SPACING.PADDING_MD}`,
        textAlign: 'center',
        maxWidth: LAYOUT.CONTAINER_LG,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Main Title */}
      <h1 style={{
        fontSize: TYPOGRAPHY.SIZE_4XL,
        fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
        color: COLORS.TEXT_PRIMARY,
        marginBottom: SPACING.MARGIN_LG,
        lineHeight: TYPOGRAPHY.LEADING_TIGHT,
        letterSpacing: '2%',
        margin: '0 0 40px 0',
      }}>
        Unlock the latest features of MIMO within 1 min
      </h1>

      {/* Notice */}
      <p style={{
        fontSize: TYPOGRAPHY.SIZE_2XL,
        fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
        color: COLORS.TEXT_PRIMARY,
        marginBottom: SPACING.MARGIN_XL,
        opacity: 0.6,
        margin: '0 0 40px 0',
      }}>
        Notice*: Only for iOS users
      </p>

      {/* Instructions */}
      <div style={{
        border: `4px solid ${COLORS.PRIMARY}`,
        borderRadius: BORDER_RADIUS.MD,
        padding: SPACING.PADDING_LG,
        marginBottom: SPACING.MARGIN_2XL,
        backgroundColor: 'rgba(66, 235, 174, 0.05)',
        margin: '0 0 80px 0',
      }}>
        <p style={{
          fontSize: TYPOGRAPHY.SIZE_XL,
          fontWeight: TYPOGRAPHY.WEIGHT_NORMAL,
          color: COLORS.TEXT_PRIMARY,
          lineHeight: TYPOGRAPHY.LEADING_NORMAL,
          letterSpacing: '2%',
          margin: 0,
        }}>
          Step 1: Install Testflight app on your Apple device<br/>
          Step 2: Click our Testflight download link:
        </p>
      </div>

      {/* How to install Section */}
      <div style={{ marginBottom: SPACING.MARGIN_3XL }}>
        <h2 style={{
          fontSize: TYPOGRAPHY.SIZE_5XL,
          fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
          color: COLORS.TEXT_PRIMARY,
          marginBottom: SPACING.MARGIN_XL,
          lineHeight: TYPOGRAPHY.LEADING_TIGHT,
          letterSpacing: '2%',
          margin: '0 0 40px 0',
        }}>
          How to install via Testflight
        </h2>
        
        <p style={{
          fontSize: TYPOGRAPHY.SIZE_XL,
          fontWeight: TYPOGRAPHY.WEIGHT_NORMAL,
          color: COLORS.TEXT_PRIMARY,
          lineHeight: TYPOGRAPHY.LEADING_NORMAL,
          letterSpacing: '2%',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          By downloading MIMO on Testflight, you can experience the latest features before the official IOS version, and most importantly, you can give us your valuable suggestions to make MIMO better!
        </p>
      </div>

      {/* Why TestFlight Section */}
      <div>
        <h2 style={{
          fontSize: TYPOGRAPHY.SIZE_5XL,
          fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
          color: COLORS.TEXT_PRIMARY,
          marginBottom: SPACING.MARGIN_XL,
          lineHeight: TYPOGRAPHY.LEADING_TIGHT,
          letterSpacing: '2%',
          margin: '0 0 40px 0',
        }}>
          Why via Testflight?
        </h2>
        
        <p style={{
          fontSize: TYPOGRAPHY.SIZE_XL,
          fontWeight: TYPOGRAPHY.WEIGHT_NORMAL,
          color: COLORS.TEXT_PRIMARY,
          lineHeight: TYPOGRAPHY.LEADING_NORMAL,
          letterSpacing: '2%',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          TestFlight allows you to access beta versions of apps before they're released to the App Store. This means you get early access to new features and can provide feedback to help improve the app.
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 