import React from 'react';
import { COLORS, SPACING, LAYOUT } from '../../constants/designTokens';

const DevicePreview = () => {
  return (
    <section 
      className="device-preview"
      style={{
        padding: `${SPACING.PADDING_2XL} ${SPACING.PADDING_MD}`,
        maxWidth: LAYOUT.CONTAINER_LG,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        gap: SPACING.GAP_3XL,
        flexWrap: 'wrap',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* iPhone Device */}
      <div className="device-container" style={{ 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className="device-frame" style={{
          width: '294px',
          height: '593px',
          backgroundColor: '#1a1a1a',
          borderRadius: '32px',
          border: '8px solid #333',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        }}>
          <div className="device-screen" style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Mock App Interface */}
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #43FFBB 0%, #42EBAE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontSize: '18px',
              fontWeight: 'bold',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <div style={{ fontSize: '24px' }}>📱</div>
              <div>MIMO App</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>TestFlight</div>
            </div>
          </div>
        </div>
        <p style={{
          marginTop: '20px',
          fontSize: '16px',
          color: COLORS.TEXT_PRIMARY,
          textAlign: 'center',
          opacity: 0.8,
        }}>
          iPhone Preview
        </p>
      </div>

      {/* iPad Device */}
      <div className="device-container" style={{ 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className="device-frame" style={{
          width: '294px',
          height: '593px',
          backgroundColor: '#1a1a1a',
          borderRadius: '32px',
          border: '8px solid #333',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        }}>
          <div className="device-screen" style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Mock App Interface */}
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #43FFBB 0%, #42EBAE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontSize: '18px',
              fontWeight: 'bold',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <div style={{ fontSize: '24px' }}>📱</div>
              <div>MIMO App</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>TestFlight</div>
            </div>
          </div>
        </div>
        <p style={{
          marginTop: '20px',
          fontSize: '16px',
          color: COLORS.TEXT_PRIMARY,
          textAlign: 'center',
          opacity: 0.8,
        }}>
          iPad Preview
        </p>
      </div>
    </section>
  );
};

export default DevicePreview; 