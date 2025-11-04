import React from 'react';
import '../styles/LessonPlans.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Fetching lesson plans...</p>
    </div>
  );
};

export default LoadingSpinner;
