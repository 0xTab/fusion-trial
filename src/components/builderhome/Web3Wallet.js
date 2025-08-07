import React from 'react';

const Web3Wallet = () => {
  return (
    <section className="web3-wallet">
      <div className="wallet-background">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1d8a962b8879ad9be75f648c2ca663aa6bef23a0?width=1464" 
          alt="Background" 
          className="wallet-bg-image"
        />
        <div className="wallet-overlay"></div>
      </div>
      
      <div className="wallet-content">
        <div className="wallet-phone">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/547fcdc438f2758ee3c7ca7c378bd924b3cb12c7?width=1504" 
            alt="Web3.0 Wallet Interface" 
            className="wallet-phone-image"
          />
        </div>
        
        <div className="wallet-text">
          <h2 className="wallet-title">Web3.0 Wallet</h2>
          <p className="wallet-description">
            Manage your digital assets securely with our integrated Web3.0 wallet solution.
          </p>
        </div>
        
        <div className="crypto-icons">
          <div className="crypto-icon ethereum">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="50" fill="#43FFBB" fillOpacity="0.3"/>
              <ellipse cx="50.5" cy="50" rx="41.5" ry="42" fill="#00C880"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M50.4074 18L31 50.2372L50.4074 61.768L69.694 50.2372L50.4074 18ZM31 54.0806L50.4074 65.4878L69.694 54.0806L50.4074 81.4823L31 54.0806Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M50.408 61.6937V18L69.6401 50.146L50.408 61.6937ZM69.5766 54.123L50.408 81.4824V65.538L69.5766 54.123Z" fill="#E7E7E7"/>
              <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M50.4077 41.5587L31.0002 50.238L50.4077 61.7688L69.6943 50.238L50.4077 41.5587Z" fill="#C3C7CE"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M50.408 61.7681V41.5586L69.694 50.2376L50.408 61.7681Z" fill="white"/>
            </svg>
          </div>
          
          <div className="crypto-icon bitcoin">
            <svg width="85" height="85" viewBox="0 0 85 85" fill="none">
              <circle cx="42.817" cy="42.2271" r="41.8384" fill="#43FFBB" fillOpacity="0.3"/>
              <circle cx="42.8169" cy="42.2271" r="33.4708" fill="#00C880"/>
              <path d="M55.2425 43.7818C57.9322 43.2059 60.0138 41.4586 60.6225 37.7897C61.4763 32.7748 57.8976 30.0583 52.6973 28.1753L54.5125 21.4011L50.3727 20.2918L48.608 26.8779C47.5326 26.5897 46.4233 26.3213 45.3141 26.0527L47.0931 19.4131L42.9532 18.3038L41.1381 25.078C39.6038 24.7162 37.8372 24.2188 32.8318 22.8524L31.6505 27.261C34.9346 28.0789 36.7057 28.3284 36.5372 30.5295L31.5672 49.0777C30.872 50.6739 29.6055 50.0777 26.6568 49.2313L24.5055 53.9274C32.0537 55.9499 32.8045 56.18 32.8045 56.18L31.25 61.9815L35.39 63.0908L36.9229 57.37C38.0445 57.6995 39.1469 57.9949 40.1952 58.2758L38.6696 63.9696L42.8094 65.0788L44.3639 59.2773C51.4003 60.7593 56.5048 60.2542 58.8735 53.8878C60.7616 48.7756 58.915 45.774 55.2425 43.7818ZM44.0982 30.9132C46.4369 31.5399 53.9434 32.7734 52.6397 37.6389C51.3936 42.2896 44.2258 39.7925 41.8869 39.1658L44.0982 30.9132ZM38.3431 52.3916L40.7777 43.3056C43.5735 44.0548 52.3435 45.5693 50.9173 50.8919C49.5415 56.0261 41.1388 53.1408 38.3431 52.3916Z" fill="url(#paint0_linear_1_1090)"/>
              <defs>
                <linearGradient id="paint0_linear_1_1090" x1="50.7051" y1="20.3809" x2="39.0017" y2="64.0585" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FAFF00"/>
                  <stop offset="1" stopColor="#FFB800"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="crypto-icon solana">
            <svg width="116" height="116" viewBox="0 0 116 116" fill="none">
              <circle cx="58" cy="58" r="58" fill="#43FFBB" fillOpacity="0.3"/>
              <circle cx="58.0001" cy="58" r="46.4" fill="#00C880"/>
              <path d="M89.5602 49.8114C88.6994 45.8018 77.0708 44.7987 62.4065 47.1395L61.0338 40.751L79.1371 36.8646L76.2827 23.5687L26.7808 34.1959L29.6352 47.4918L47.7371 43.6056L49.1153 50.0256C35.0578 53.9062 25.1204 59.5027 25.9706 63.4631C26.821 67.424 38.1798 68.4488 52.5912 66.2162L57.5163 89.1578L70.8131 86.3032L65.8946 63.3928C80.2291 59.5099 90.421 53.8211 89.5602 49.8114ZM58.6133 60.5873C43.0509 63.9282 29.9177 64.2281 29.2795 61.2551C28.739 58.7379 37.3318 54.6824 49.4256 51.471L49.7509 52.9862L49.7523 52.9859L51.0853 59.195C53.315 58.8456 55.6443 58.4132 58.0363 57.8997C60.2389 57.4269 62.3658 56.9116 64.3885 56.3702L62.7188 48.593C75.3223 46.4647 85.0887 46.602 85.637 49.1561C86.275 52.1291 74.1756 57.2463 58.6133 60.5873Z" fill="#A3FFCD"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Wallet;
