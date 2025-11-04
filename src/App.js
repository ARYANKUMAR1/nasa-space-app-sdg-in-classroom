import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SDGsPage from './pages/SDGsPage';
import LessonPlansPage from './pages/LessonPlansPage';
import TriviaPage from './pages/TriviaPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sdgs" element={<SDGsPage />} />
            <Route path="/lesson-plans" element={<LessonPlansPage />} />
            <Route path="/trivia" element={<TriviaPage />} /> Add the TriviaPage route
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
