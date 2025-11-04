
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <img src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/SDG-Wheel_WEB.png" alt="Logo" className="logo" width="50" height="50" />
            <h1>NASA Space App: SDGs in Classroom </h1>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/sdgs" className={location.pathname === '/sdgs' ? 'active' : ''}>SDGs</Link>
                <Link to="/lesson-plans" className={location.pathname === '/lesson-plans' ? 'active' : ''}>Classroom</Link>
                <Link to="/trivia" className={location.pathname === '/trivia' ? 'active' : ''}>Trivia</Link>
            </nav>
        </header>
    );
}

export default Header;