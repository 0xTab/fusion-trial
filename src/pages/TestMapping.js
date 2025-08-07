import React from 'react';
import FigmaButton from '../components/common/FigmaButton';
import { useFigmaProcessor, getDefaultFigmaData } from '../hooks/useFigmaProcessor';
import '../styles/TestMapping.css';
import { componentMapping } from '../utils/figmaProcessor';

const TestMapping = () => {
  const { components: figmaComponents, loading, error } = useFigmaProcessor(getDefaultFigmaData());

  const handleButtonClick = (figmaName) => {
    console.log(`${figmaName} clicked!`);
  };

  const renderComponent = (component) => {
    const { figmaName, reactComponent, props, styles } = component;
    
    switch (reactComponent) {
      case 'FigmaButton':
        return (
          <FigmaButton
            key={component.nodeId}
            variant={props.variant}
            size={props.size}
            withIcon={props.withIcon}
            disabled={props.disabled}
            className={props.className}
            style={styles}
            onClick={() => handleButtonClick(figmaName)}
          >
            {props.children}
          </FigmaButton>
        );
      default:
        return <div>Unknown component: {reactComponent}</div>;
    }
  };

  if (loading) {
    return (
      <div className="test-mapping">
        <div className="test-mapping__container">
          <h1 className="test-mapping__title">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="test-mapping">
        <div className="test-mapping__container">
          <h1 className="test-mapping__title">Error</h1>
          <p className="test-mapping__subtitle">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="test-mapping">
      <div className="test-mapping__container">
        <h1 className="test-mapping__title">Component Mapping Test</h1>
        <p className="test-mapping__subtitle">Testing Figma design to component mapping</p>
        
        {/* Header Section */}
        <section className="test-mapping__header">
          <div className="test-mapping__logo">
            <div className="test-mapping__logo-background">
              <img src="/src/assets/images/logo-background.png" alt="Logo Background" />
            </div>
            <div className="test-mapping__logo-text">
              <svg width="101" height="21" viewBox="0 0 101 21" fill="none">
                <path d="M0 0.17H25.42V20.52H0V0.17Z" fill="white"/>
                <path d="M32.04 0.17H38.46V20.52H32.04V0.17Z" fill="white"/>
                <path d="M45.12 0.17H70.54V20.52H45.12V0.17Z" fill="white"/>
                <path d="M76.5 0H101.5V20.7H76.5V0Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          <div className="test-mapping__language">
            <span>LANGUAGE</span>
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
              <path d="M1 1L5.5 6L10 1" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="test-mapping__menu">
            <svg width="34" height="22" viewBox="0 0 34 22" fill="none">
              <path d="M0 2H34M0 11H34M0 20H34" stroke="white" strokeWidth="3"/>
            </svg>
          </div>
        </section>

        {/* Main Content */}
        <section className="test-mapping__content">
          <div className="test-mapping__hero">
            <div className="test-mapping__hero-text">
              <h2 className="test-mapping__hero-title">
                <span className="test-mapping__title-main">Social Platform</span>
                <span className="test-mapping__title-accent">for Web3.0.</span>
              </h2>
              <p className="test-mapping__hero-description">
                An instant messaging social platform for Web3.0.
              </p>
            </div>
            
            <div className="test-mapping__hero-visual">
              <div className="test-mapping__phone-mockup">
                <img src="/src/assets/images/hero-image.png" alt="Phone Mockup" />
              </div>
              <div className="test-mapping__floating-elements">
                <div className="test-mapping__element test-mapping__element--1"></div>
                <div className="test-mapping__element test-mapping__element--2"></div>
                <div className="test-mapping__element test-mapping__element--3"></div>
                <div className="test-mapping__element test-mapping__element--4"></div>
                <div className="test-mapping__element test-mapping__element--5"></div>
                <div className="test-mapping__element test-mapping__element--6"></div>
                <div className="test-mapping__element test-mapping__element--7"></div>
                <div className="test-mapping__element test-mapping__element--8"></div>
                <div className="test-mapping__element test-mapping__element--9"></div>
              </div>
            </div>
          </div>
          
          {/* Mapped Components Section */}
          <section className="test-mapping__mapped-section">
            <h3>Mapped Components from Figma Design</h3>
            
            {figmaComponents.length > 0 ? (
              <div className="test-mapping__mapped-components">
                {figmaComponents.map((component) => (
                  <div key={component.nodeId} className="test-mapping__component-item">
                    <h4>Figma Component: {component.figmaName}</h4>
                    <p>Mapped to: {component.reactComponent}</p>
                    <div className="test-mapping__component-preview">
                      {renderComponent(component)}
                    </div>
                    <div className="test-mapping__component-properties">
                      <h5>Props:</h5>
                      <pre>{JSON.stringify(component.props, null, 2)}</pre>
                      <h5>Styles:</h5>
                      <pre>{JSON.stringify(component.styles, null, 2)}</pre>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="test-mapping__no-components">
                <p>No mapped components found in the current design.</p>
                <p>Available mappings: {JSON.stringify(componentMapping)}</p>
              </div>
            )}
            
            <div className="test-mapping__mapping-info">
              <h4>Mapping Configuration:</h4>
              <p>
                This page demonstrates the simplified component mapping functionality. 
                When a Figma component name matches the mapping configuration, 
                it automatically uses the corresponding React component.
              </p>
              <p>
                Current mapping: <strong>MyButton</strong> → <strong>FigmaButton</strong>
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default TestMapping; 