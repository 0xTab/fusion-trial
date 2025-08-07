import React from 'react';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-background">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/ee00d2e5a71ced7341a3476717205c46594fc6e1?width=1496" 
          alt="Contact Us Background" 
          className="contact-bg-image"
        />
      </div>
      
      <div className="contact-content">
        <div className="contact-navigation">
          <button className="nav-button nav-prev" aria-label="Previous">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <path d="M30.1013 13.6371L21.323 22.4346L30.1013 31.2321L27.3988 33.9346L15.8988 22.4346L27.3988 10.9346L30.1013 13.6371Z" fill="black"/>
            </svg>
          </button>
          
          <div className="contact-phone">
            <div className="qr-code">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F1a19d785dcd548d6a427a21d0619697b%2F1180b828939a4103961a70b91d31dcd8?format=webp&width=800" 
                alt="QR Code" 
                className="qr-image"
              />
            </div>
          </div>
          
          <button className="nav-button nav-next" aria-label="Next">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <path d="M15.8987 32.3629L24.677 23.5654L15.8987 14.7679L18.6012 12.0654L30.1012 23.5654L18.6012 35.0654L15.8987 32.3629Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
