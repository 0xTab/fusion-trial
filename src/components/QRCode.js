import React from 'react';

const QRCode = ({ size = 110 }) => {
  return (
    <div className="qr-code-container" style={{ width: size, height: size }}>
      <div className="qr-code-wrapper">
        <div className="qr-code-bg">
          <div className="qr-code-pattern">
            {/* Simple QR code pattern representation */}
            <svg width={size - 4} height={size - 4} viewBox="0 0 100 100" fill="none">
              {/* Top-left finder pattern */}
              <rect x="5" y="5" width="25" height="25" fill="#000"/>
              <rect x="10" y="10" width="15" height="15" fill="#fff"/>
              <rect x="12.5" y="12.5" width="10" height="10" fill="#000"/>
              
              {/* Top-right finder pattern */}
              <rect x="70" y="5" width="25" height="25" fill="#000"/>
              <rect x="75" y="10" width="15" height="15" fill="#fff"/>
              <rect x="77.5" y="12.5" width="10" height="10" fill="#000"/>
              
              {/* Bottom-left finder pattern */}
              <rect x="5" y="70" width="25" height="25" fill="#000"/>
              <rect x="10" y="75" width="15" height="15" fill="#fff"/>
              <rect x="12.5" y="77.5" width="10" height="10" fill="#000"/>
              
              {/* Data modules (simplified pattern) */}
              <rect x="35" y="10" width="2.5" height="2.5" fill="#000"/>
              <rect x="40" y="10" width="2.5" height="2.5" fill="#000"/>
              <rect x="50" y="10" width="2.5" height="2.5" fill="#000"/>
              <rect x="55" y="10" width="2.5" height="2.5" fill="#000"/>
              <rect x="35" y="15" width="2.5" height="2.5" fill="#000"/>
              <rect x="45" y="15" width="2.5" height="2.5" fill="#000"/>
              <rect x="55" y="15" width="2.5" height="2.5" fill="#000"/>
              
              <rect x="10" y="35" width="2.5" height="2.5" fill="#000"/>
              <rect x="15" y="35" width="2.5" height="2.5" fill="#000"/>
              <rect x="25" y="35" width="2.5" height="2.5" fill="#000"/>
              <rect x="35" y="35" width="2.5" height="2.5" fill="#000"/>
              <rect x="45" y="35" width="2.5" height="2.5" fill="#000"/>
              <rect x="55" y="35" width="2.5" height="2.5" fill="#000"/>
              <rect x="65" y="35" width="2.5" height="2.5" fill="#000"/>
              <rect x="75" y="35" width="2.5" height="2.5" fill="#000"/>
              <rect x="85" y="35" width="2.5" height="2.5" fill="#000"/>
              
              <rect x="35" y="40" width="2.5" height="2.5" fill="#000"/>
              <rect x="50" y="40" width="2.5" height="2.5" fill="#000"/>
              <rect x="65" y="40" width="2.5" height="2.5" fill="#000"/>
              <rect x="80" y="40" width="2.5" height="2.5" fill="#000"/>
              
              <rect x="35" y="50" width="2.5" height="2.5" fill="#000"/>
              <rect x="45" y="50" width="2.5" height="2.5" fill="#000"/>
              <rect x="55" y="50" width="2.5" height="2.5" fill="#000"/>
              <rect x="75" y="50" width="2.5" height="2.5" fill="#000"/>
              <rect x="85" y="50" width="2.5" height="2.5" fill="#000"/>
              
              <rect x="35" y="60" width="2.5" height="2.5" fill="#000"/>
              <rect x="50" y="60" width="2.5" height="2.5" fill="#000"/>
              <rect x="65" y="60" width="2.5" height="2.5" fill="#000"/>
              <rect x="80" y="60" width="2.5" height="2.5" fill="#000"/>
              
              <rect x="35" y="75" width="2.5" height="2.5" fill="#000"/>
              <rect x="45" y="75" width="2.5" height="2.5" fill="#000"/>
              <rect x="55" y="75" width="2.5" height="2.5" fill="#000"/>
              <rect x="75" y="75" width="2.5" height="2.5" fill="#000"/>
              <rect x="85" y="75" width="2.5" height="2.5" fill="#000"/>
              
              <rect x="35" y="85" width="2.5" height="2.5" fill="#000"/>
              <rect x="50" y="85" width="2.5" height="2.5" fill="#000"/>
              <rect x="65" y="85" width="2.5" height="2.5" fill="#000"/>
              <rect x="80" y="85" width="2.5" height="2.5" fill="#000"/>
            </svg>
          </div>
        </div>
        <div className="qr-code-center">
          <div className="qr-logo">
            <img src="/api/placeholder/20/21" alt="MIMO Logo" style={{ width: '20px', height: '21px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
