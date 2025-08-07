import React from 'react';

const NewsAndUpdates = () => {
  return (
    <section className="news-updates">
      <div className="news-background">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/9478cb072d7f6b4ce988ecc777ba1c387fe2de2f?width=1504" 
          alt="Background" 
          className="news-bg-image"
        />
        <div className="news-overlay"></div>
      </div>
      
      <div className="news-content">
        <h2 className="news-title">News and Updates</h2>
        <p className="news-description">
          Mimo offers a secure and beginner-friendly solution to help you get latest Web3 news and updates easily.
        </p>
        
        <div className="news-phone">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/71a71e0ebb74d606f51d833c6f950a92a2dfd687?width=1397" 
            alt="News Interface" 
            className="news-phone-image"
          />
        </div>
        
        <div className="floating-elements">
          <div className="star-element star-1">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M12.4992 1.48841C12.0111 15.1018 8.25995 18.7987 1.4065 19.1395L10.0338 25.751L29.1371 21.8646L26.2827 8.56871L-23.2192 19.1959L-20.3648 32.4918L-2.2629 28.6056L-0.884741 35.0256C-14.9422 38.9062 -24.8796 44.5027 -24.0294 48.4631C-23.179 52.424 -11.8202 53.4488 2.59119 51.2162L7.51631 74.1578L20.8131 71.3032L15.8946 48.3928C30.2291 44.5099 40.421 38.8211 39.5602 34.8114ZM8.61332 45.5873C-6.94906 48.9282 -20.0823 49.2281 -20.7205 46.2551C-21.261 43.7379 -12.6682 39.6824 -0.574422 36.471L-0.249062 37.9862L-0.247726 37.9859L1.08532 44.195C3.31501 43.8456 5.64434 43.4132 8.03632 42.8997C10.2389 42.4269 12.3658 41.9116 14.3885 41.3702L12.7188 33.593C25.3223 31.4647 35.0887 31.602 35.637 34.1561C36.275 37.1291 24.1756 42.2463 8.61332 45.5873Z" fill="#43FFBB"/>
            </svg>
          </div>
          
          <div className="star-element star-2">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M12.4992 1.48841C12.0111 15.1018 8.25995 18.7987 1.4065 19.1395L10.0338 25.751L29.1371 21.8646L26.2827 8.56871L-23.2192 19.1959L-20.3648 32.4918L-2.2629 28.6056L-0.884741 35.0256C-14.9422 38.9062 -24.8796 44.5027 -24.0294 48.4631C-23.179 52.424 -11.8202 53.4488 2.59119 51.2162L7.51631 74.1578L20.8131 71.3032L15.8946 48.3928C30.2291 44.5099 40.421 38.8211 39.5602 34.8114ZM8.61332 45.5873C-6.94906 48.9282 -20.0823 49.2281 -20.7205 46.2551C-21.261 43.7379 -12.6682 39.6824 -0.574422 36.471L-0.249062 37.9862L-0.247726 37.9859L1.08532 44.195C3.31501 43.8456 5.64434 43.4132 8.03632 42.8997C10.2389 42.4269 12.3658 41.9116 14.3885 41.3702L12.7188 33.593C25.3223 31.4647 35.0887 31.602 35.637 34.1561C36.275 37.1291 24.1756 42.2463 8.61332 45.5873Z" fill="#43FFBB"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
