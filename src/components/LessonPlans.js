import React, { useState, useEffect } from "react";
import '../styles/LessonPlans.css';
import LessonCard from './LessonCard';
import { getLessonPlans } from "../services/lessonPlanService";
import LoadingSpinner from './LoadingSpinner'; 
const LessonPlans = () => {
  const [lectures, setLectures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const data = await getLessonPlans();
        setLectures(data);
      } catch (error) {
        console.error('Error fetching lectures:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLectures();
  }, []);

  return (
    <div className="lesson-plans">
      <h2>Lecture Planner</h2>
      {isLoading ? (
        <LoadingSpinner /> //Display Loading animation
      ) : (
        <div className="lecture-grid">
          {lectures.map((lecture) => (
            <LessonCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonPlans;