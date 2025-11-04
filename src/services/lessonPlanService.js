import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL_DEVELOPMENT || process.env.REACT_APP_API_URL_PRODUCTION || '';
const API_URL = 'https://nasa-space-app-438018.el.r.appspot.com/api/lesson-plan';

if (!API_URL) {
    console.error("Error: No API URL found in .env file. Please set REACT_APP_API_URL_DEVELOPMENT or REACT_APP_API_URL_PRODUCTION.");
}

export const createLessonPlan = async (lessonPlan) => {
    try {
        const response = await axios.post(API_URL, lessonPlan);
        return response.data;
    } catch (error) {
        console.error('Error creating lesson plan:', error);
        throw error;
    }
};


export const getLessonPlanById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`); 
        return response.data;
    } catch (error) {
        console.error(`Error fetching lesson plan with id ${id}:`, error);
        throw error;
    }
};

export const getLessonPlans = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching lesson plans:', error);
        throw error; // Re-throw to be handled higher up
    }
};


export const updateLessonPlan = async (id, lessonPlan) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, lessonPlan);
        return response.data;
    } catch (error) {
        console.error(`Error updating lesson plan with id ${id}:`, error);
        throw error;
    }
};

export const deleteLessonPlan = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return true; // Indicate success
    } catch (error) {
        console.error(`Error deleting lesson plan with id ${id}:`, error);
        throw error;
    }
};