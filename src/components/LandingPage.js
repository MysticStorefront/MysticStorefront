import React from 'react';
import './LandingPage.css';

const LandingPage = (props) => {
  const{header} = props;
  return (
    <div className="landing-section">
      <div className={header}></div>
    </div>
  );
};

export default LandingPage;
