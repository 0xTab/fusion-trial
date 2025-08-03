import './App.css';

function App() {
  return (
    <div className="device-mockups-hero">
      <div className="hero-background">
        <div className="background-shapes">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
          <div className="wave wave-4"></div>
        </div>
        
        <div className="decorative-elements">
          <div className="element circle-large element-1"></div>
          <div className="element circle-medium element-2"></div>
          <div className="element circle-small element-3"></div>
          <div className="element circle-small element-4"></div>
          <div className="element circle-small element-5"></div>
          <div className="element circle-tiny element-6"></div>
          <div className="element circle-tiny element-7"></div>
          <div className="element rect-small element-8"></div>
          <div className="element rect-tiny element-9"></div>
          <div className="element rect-mini element-10"></div>
          <div className="element star element-11"></div>
          <div className="element diamond element-12"></div>
          <div className="element triangle element-13"></div>
          <div className="element star element-14"></div>
          <div className="element star element-15"></div>
          <div className="element star element-16"></div>
          <div className="element star element-17"></div>
          <div className="element star element-18"></div>
        </div>
        
        <div className="content-container">
          <div className="text-content">
            <h1 className="hero-title">
              <span className="title-device">DEVICE</span>
              <span className="title-mockups">MOCKUPS</span>
            </h1>
          </div>
          
          <div className="devices-container">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Fffb856efc1164c72a0c848d2e765bb5e%2F3d03c06d0b9c4907a3a625d8005c14c2?format=webp&width=800"
              alt="Device mockups showcasing various devices"
              className="devices-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
