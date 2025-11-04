import React, { useState } from 'react';
import '../styles/LessonPlans.css';

const LessonCard = ({ lecture }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="lecture-card" onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
      <div className="lecture-image-container">
        <img src={lecture.themeLink} alt={lecture.title} />
      </div>
      <div className="lecture-info">
        <h3>{lecture.title}</h3>
        <div className="lecture-details">
          <span className="duration"><i className="fas fa-clock"></i> {lecture.duration} mins</span>
          <span className="date">{lecture.lectureDate} at {lecture.lectureTime}</span>
        </div>
      </div>

      {showPopup && (
        <div className="lecture-popup">
          <h3>{lecture.title}</h3>
          <div className="lecturer-info">
            <img src="https://cdn-icons-png.flaticon.com/512/3829/3829792.png" alt={lecture.lectureBy} className="lecturer-image" />
            <span>{lecture.lectureBy}</span>
          </div>
          <p>{lecture.description}</p>
          <button>Join Now</button>
        </div>
      )}
    </div>
  );
};

export default LessonCard;














// new v1
//New component for individual lecture cards


// import React, { useState } from 'react';
// import '../styles/LessonPlans.css';

// const LessonCard = ({ lecture }) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleMouseEnter = () => {
//     setShowPopup(true);
//   };

//   const handleMouseLeave = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div
//       className="lecture-card"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="lecture-image">
//         <img src={lecture.themeLink} alt={lecture.title} />
//       </div>
//       <div className="lecture-info">
//         <h3>{lecture.title}</h3>
//         <div className="lecture-details">
//           <span className="duration">
//             <i className="fas fa-clock"></i> {lecture.duration} mins
//           </span>
//           <span className="date-time">
//             {lecture.lectureDate} at {lecture.lectureTime}
//           </span>
//         </div>
//       </div>
//       {showPopup && (
//         <div className="lecture-popup">
//           <h2>{lecture.title}</h2>
//           <div className="lecturer-info">
//             <img src="/placeholder-prof-image.jpg" alt={lecture.lectureBy} className="lecturer-image" /> {/* Replace with actual image */}
//             <span>{lecture.lectureBy}</span>
//           </div>
//           <p>{lecture.description}</p>
//           <a href={lecture.link} className="join-button">Join Now</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LessonCard;
