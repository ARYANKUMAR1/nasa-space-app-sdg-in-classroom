import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AddLessonForm.css';

const API_URL = 'https://nasa-space-app-438018.el.r.appspot.com/api/lesson-plan';
// const API_URL = process.env.REACT_APP_API_URL_DEVELOPMENT || process.env.REACT_APP_API_URL_PRODUCTION || 'http://localhost:8080/api/lesson-plan'; // Fallback to localhost if not set

const AddLessonForm = ({ onClose, lesson }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    link: '',
    lectureDate: '',
    lectureTime: '',
    lectureBy: '',
    themeLink: ''
  });

  useEffect(() => {
    if (lesson) {
      setFormData(lesson);
    }
  }, [lesson]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = lesson
      ? axios.put(`${API_URL}/${lesson.id}`, formData)
      : axios.post(`${API_URL}`, formData);

    request
      .then(response => {
        console.log('Lesson saved:', response.data);
        onClose();
      })
      .catch(error => {
        console.error('There was an error saving the lesson!', error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
          <input type="number" name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" required />
          <input type="text" name="link" value={formData.link} onChange={handleChange} placeholder="Link" required />
          <input type="date" name="lectureDate" value={formData.lectureDate} onChange={handleChange} required />
          <input type="time" name="lectureTime" value={formData.lectureTime} onChange={handleChange} required />
          <input type="text" name="lectureBy" value={formData.lectureBy} onChange={handleChange} placeholder="Lecture By" required />
          <input type="text" name="themeLink" value={formData.themeLink} onChange={handleChange} placeholder="Theme Link" required />
          <button type="submit">{lesson ? 'Update' : 'Add'} Lesson</button>
        </form>
      </div>
    </div>
  );
};

export default AddLessonForm;
