import React from 'react';
import '../styles/LessonPlans.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading lesson plans...</p>
    </div>
  );
};

export default LoadingAnimation;