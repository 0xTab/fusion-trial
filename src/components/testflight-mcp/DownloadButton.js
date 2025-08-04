import React from 'react';
import { COLORS, TYPOGRAPHY, BORDER_RADIUS } from '../../constants/designTokens';

const DownloadButton = () => {
  return (
    <button
      className="download-button"
      style={{
        backgroundColor: COLORS.PRIMARY,
        color: COLORS.BACKGROUND_DARK,
        border: 'none',
        borderRadius: BORDER_RADIUS.MD,
        padding: '8px 16px',
        fontSize: TYPOGRAPHY.SIZE_SM,
        fontWeight: TYPOGRAPHY.WEIGHT_SEMIBOLD,
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
      Download
    </button>
  );
};

export default DownloadButton; 