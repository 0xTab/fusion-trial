import React from 'react';
import '../../styles/FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'User-friendly guide and SDK',
      description: 'Create your DApp in only a few hours.',
      icon: (
        <svg width="166" height="162" viewBox="0 0 166 162" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.42 0H162.38V162.38H1.42V0Z" fill="#1D1D1D"/>
          <path d="M3.45 87.79H53.96V115.86H3.45V87.79Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M8.29 24.47H47.46V97.23H8.29V24.47Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M8.29 24.47H46.92V32.62H8.29V24.47Z" fill="#191821" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M8.29 87.79H47.46V97.23H8.29V87.79Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M0 58.5H20.86V100.89H0V58.5Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M46.58 81.35H57.94V93.72H46.58V81.35Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M41.58 69.51H54.98V84.09H41.58V69.51Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M36.82 58.51H50.22V73.09H36.82V58.51Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M18.72 11.56H76.22V69.06H18.72V11.56Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M35.05 28.86H60.07V52.06H35.05V28.86Z" fill="#02D9A3"/>
          <path d="M79.08 3H145.68V67.81H79.08V3Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M79.08 13.71H145.68V34.06H79.08V13.71Z" fill="#02D9A3"/>
          <path d="M134.23 8.42H138.9V8.42H134.23V8.42Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M90.15 54.68H105.16V54.68H90.15V54.68Z" fill="#191821" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M114.55 49.46H140.04V61.07H114.55V49.46Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M129.2 22.28H166.05V87.09H129.2V22.28Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M129.2 33H166.05V53.35H129.2V33Z" fill="#02D9A3"/>
          <path d="M154.61 27.71H159.28V27.71H154.61V27.71Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M134.93 65.55H160.42V77.16H134.93V65.55Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M79.01 11.84H116.54V49.37H79.01V11.84Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M92.05 25.09H106.49V39.54H92.05V25.09Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M138.45 33.95H156.89V52.39H138.45V33.95Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M70.99 85.13H120.06V148.22H70.99V85.13Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M76.16 90.45H114.88V142.66H76.16V90.45Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M82.41 117.03H108.41V117.03H82.41V117.03Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M83.73 125.82H106.67V125.82H83.73V125.82Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M82.37 134.36H107.8V134.36H82.37V134.36Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M100.79 108.67H108.11V108.67H100.79V108.67Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M100.64 100.02H108.11V100.02H100.64V100.02Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M105.73 111.54H133.88V162H105.73V111.54Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M56.53 110.74H84.55V162H56.53V110.74Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M82.48 96.13H94.29V110.73H82.48V96.13Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Initial advantage',
      description: 'Get a large number of users in no time.',
      icon: (
        <svg width="161" height="156" viewBox="0 0 161 156" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150.63 54.61H161.47V118H150.63V54.61Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="13 13"/>
          <path d="M30.11 0H112.63V20.79H30.11V0Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="13 13"/>
          <path d="M4.99 61.85H119.93V156.47H4.99V61.85Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="13 13"/>
          <path d="M25.79 20.79H139.67V134.67H25.79V20.79Z" fill="#1D1D1D"/>
          <path d="M73.78 0H95.26V38.43H73.78V0Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M86.19 60.68H102.63V77.12H86.19V60.68Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M142.29 60.12H154.63V72.46H142.29V60.12Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M79.2 35.84H91.54V48.18H79.2V35.84Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M145.82 37.82H154.2V46.2H145.82V37.82Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M118.75 69.41H129.7V80.36H118.75V69.41Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M117.21 1.78H125.59V10.16H117.21V1.78Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M138.78 9.36H155.22V25.8H138.78V9.36Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M95.92 20.45H104.61V29.44H95.92V20.45Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M129.76 22.89H140.73V33.24H129.76V22.89Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M121.4 59.23H123.41V70.78H121.4V59.23Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M132.17 52.57H144.19V61.85H132.17V52.57Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M135.92 42.01H145.81V42.01H135.92V42.01Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M99.17 54.67H105.57V62.2H99.17V54.67Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M91.54 42.01H99.92V42.01H91.54V42.01Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M119.51 10.13H120.89V22.27H119.51V10.13Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M89.97 11.58H149.01V70.62H89.97V11.58Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M112.64 41.69H119.29V55.8H112.64V41.69Z" fill="#191821" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M129.7 34.35H134.64V44.23H129.7V34.35Z" fill="#191821" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M106.04 27.5H129.7V51.01H106.04V27.5Z" fill="#191821" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M112.04 33.31H112.04V45.27H112.04V33.31Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M38 36.85H66.56V56.29H38V36.85Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M44.02 21.78H60.52V38.28H44.02V21.78Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M0 36.85H28.55V56.29H0V36.85Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M6.02 21.78H22.52V38.28H6.02V21.78Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M19 46.57H47.53V66.01H19V46.57Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M22.49 28.97H44.04V50.52H22.49V28.97Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M11.83 79.3H56.3V113.49H11.83V79.3Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M11.83 79.3H34.06V113.49H11.83V79.3Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M44.11 71.38H57.79V79.31H44.11V71.38Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M10.28 71.38H23.96V79.31H10.28V71.38Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M87.25 88.99H142.71V144.91H87.25V88.99Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M64.31 96.43H119.79V152.35H64.31V96.43Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M26.57 30.03H110.74V110.09H26.57V30.03Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M12.26 100.29H48.02V100.29H12.26V100.29Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M12.8 109.08H48.86V109.08H12.8V109.08Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M17.96 114.44H79.92V159.55H17.96V114.44Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M31.81 135.49H68.57V135.49H31.81V135.49Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M32.35 144.29H68.41V144.29H32.35V144.29Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M8.61 135.42H13.31V145.92H8.61V135.42Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M74.47 103.97H85.02V108.67H74.47V103.97Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Product community',
      description: 'A private community based on product developers.',
      icon: (
        <svg width="174" height="166" viewBox="0 0 174 166" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M123.66 18.59H166.07V87.61H123.66V18.59Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="13 13"/>
          <path d="M12.8 13.58H66.42V73.17H12.8V13.58Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="13 13"/>
          <path d="M63.67 160.76H98.11V164.92H63.67V160.76Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="13 13"/>
          <path d="M32 30.85H145.53V144.38H32V30.85Z" fill="#1D1D1D"/>
          <path d="M73.78 0H113.52V38.43H73.78V0Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M83.05 8.94H103.86V25.76H83.05V8.94Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M98.12 53.97H128.94V75.98H98.12V53.97Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M104.62 37.69H122.44V55.51H104.62V37.69Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M57.06 53.97H87.88V75.98H57.06V53.97Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M63.56 37.69H81.38V55.51H63.56V37.69Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M77.59 64.47H108.41V85.48H77.59V64.47Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M82.28 46.38H103.72V67.82H82.28V46.38Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M102.52 94.5H174.02V166H102.52V94.5Z" fill="#42EBAE" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M102.52 94.5H174.01V108.37H102.52V94.5Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M148.08 113.67H163.13V130.63H148.08V113.67Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M113.41 113.67H140.55V134.39H113.41V113.67Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M120.02 119.47H133.95V119.47H120.02V119.47Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M120.02 124.76H133.95V124.76H120.02V124.76Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M113.41 140.03H128.46V156.99H113.41V140.03Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M135.98 140.03H163.13V160.75H135.98V140.03Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M142.58 145.83H156.52V145.83H142.58V145.83Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M142.58 151.12H156.52V151.12H142.58V151.12Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M0 126.51H13.3V140.67H0V126.51Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M66.42 94.5H79.72V108.66H66.42V94.5Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M0 80.65H61.97V125.76H0V80.65Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M12.26 100.29H49.02V100.29H12.26V100.29Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M12.8 109.08H48.86V109.08H12.8V109.08Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M17.96 114.44H79.92V159.55H17.96V114.44Z" fill="#1D1D1D" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M31.81 135.49H68.57V135.49H31.81V135.49Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M32.35 144.29H68.41V144.29H32.35V144.29Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M8.61 135.42H13.31V145.92H8.61V135.42Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M74.47 103.97H85.02V108.67H74.47V103.97Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3"/>
        </svg>
      )
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 