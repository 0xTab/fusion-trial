import React from 'react';
import { COLORS } from '../../constants/designTokens';

const BackgroundElements = () => {
  return (
    <div className="background-elements" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
      zIndex: -1,
      overflow: 'hidden',
    }}>
      {/* Green Blur Circle 1 */}
      <div style={{
        position: 'absolute',
        width: '638px',
        height: '638px',
        background: 'rgba(176, 255, 6, 0.25)',
        borderRadius: '50%',
        filter: 'blur(672px)',
        top: '40%',
        left: '0%',
        transform: 'translateX(-50%)',
        willChange: 'transform',
      }} />
      
      {/* Green Blur Circle 2 */}
      <div style={{
        position: 'absolute',
        width: '638px',
        height: '638px',
        background: 'rgba(176, 255, 6, 0.25)',
        borderRadius: '50%',
        filter: 'blur(672px)',
        top: '60%',
        right: '0%',
        transform: 'translateX(50%)',
        willChange: 'transform',
      }} />
      
      {/* Blue Blur Circle */}
      <div style={{
        position: 'absolute',
        width: '523px',
        height: '523px',
        background: 'rgba(66, 255, 73, 0.25)',
        borderRadius: '50%',
        filter: 'blur(480px)',
        top: '0%',
        right: '0%',
        transform: 'translateX(50%)',
        willChange: 'transform',
      }} />
      
      {/* Small Green Elements */}
      <div style={{
        position: 'absolute',
        width: '50px',
        height: '60px',
        background: COLORS.PRIMARY,
        top: '30%',
        left: '15%',
        borderRadius: '8px',
        opacity: 0.8,
      }} />
      
      <div style={{
        position: 'absolute',
        width: '40px',
        height: '48px',
        background: COLORS.PRIMARY,
        top: '20%',
        right: '10%',
        borderRadius: '8px',
        opacity: 0.8,
      }} />
      
      {/* Simplified Animated Looper Elements */}
      <div className="looper-container" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
      }}>
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${2000 + i * 100}px`,
              height: `${2000 + i * 100}px`,
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: i * 0.08,
              animation: `rotate ${30 + i * 3}s linear infinite`,
              willChange: 'transform',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundElements; 