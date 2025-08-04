import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants/designTokens';

// Custom hook for responsive design
// Following React best practices for reusable logic
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoint checks
  const isMobile = windowSize.width <= parseInt(BREAKPOINTS.MOBILE);
  const isTablet = windowSize.width > parseInt(BREAKPOINTS.MOBILE) && windowSize.width <= parseInt(BREAKPOINTS.TABLET);
  const isDesktop = windowSize.width > parseInt(BREAKPOINTS.TABLET) && windowSize.width <= parseInt(BREAKPOINTS.DESKTOP);
  const isLargeDesktop = windowSize.width > parseInt(BREAKPOINTS.DESKTOP);

  // Device type
  const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : 'large-desktop';

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    deviceType,
  };
};

// Hook for checking if element is in viewport
export const useInViewport = (ref, options = {}) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInViewport;
};

// Hook for smooth scrolling
export const useSmoothScroll = () => {
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return {
    scrollToElement,
    scrollToTop,
  };
}; 