import React from 'react';
import '../styles/HomePage.css';
// import bgVideo from '../assets/videoplayback.mp4';

const youtubeVideoId = 'M-iJM02m_Hg'; // Extract the video ID from the YouTube URL
const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1`; 

// const bgVideo = 'https://www.youtube.com/watch?v=M-iJM02m_Hg&t=26s&pp=ygUGc2RnIHVu';
const countries = [
    { name: 'United States', flag: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg' },
    { name: 'Canada', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png'},
    { name: 'United Kingdom', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg' },
    { name: 'Germany', flag: 'https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg' },
    { name: 'France', flag: 'https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg' },
];
const developers = [
    { name: 'Abhishek Rai', role: 'Content & Frontend Developer' },
    { name: 'Ritika Bansal', role: 'Content & Frontend Developer' },
    { name: 'Mehak Bishnoi', role: 'Content & Frontend Developer' },
    { name: 'Aryan Kumar', role: 'Full-Stack Developer' },
    { name: 'Taranpreet Singh Khurana', role: 'Frontend Developer' },
];

const HomePage = () => {
    return (
        <div className="home-page">

            
            
            <div className="content">
                <h1>Welcome to NASA Space App: SDGs in Classroom</h1>
                <div className="video-container">
                    <iframe 
                        className="background-video"
                        // width="100%" 
                        height="300px" 
                        src={youtubeUrl} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        // allow="autoplay; encrypted-playback; picture-in-picture" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
                {/* <h2>Welcome to NASA Space App: SDGs in Classroom</h2>
                <p>
                    In 2015, the United Nations created the 2030 Sustainable Development Goals (SDG) Agenda to address global issues.
                    Learn how you can engage students in achieving these goals through exciting lesson plans!.
                </p> */}
                
                <p>In 2015, the United Nations created the 2030 Sustainable Development Goals (SDG) Agenda to address global issues. Learn how you can engage students in achieving these goals through exciting lesson plans!
                    Education is a powerful tool for shaping a better world, and by integrating the Sustainable Development Goals (SDGs) into the classroom, teachers can foster global awareness and critical thinking among students. 
                    Through engaging, science-based lesson plans, students will not only learn about space and science but also about the interconnectedness of the planet, and how they can take action to create a more sustainable 
                    future.By using real-world data from NASA’s missions, students will explore the impact of climate change, energy usage, and natural resource management. They'll gain insight into SDGs like Climate Action (Goal 13), 
                    Clean Water and Sanitation (Goal 6), and Affordable and Clean Energy (Goal 7) through hands-on activities and collaborative projects. Our platform offers a variety of interactive resources to help teachers bring these concepts to life. Whether it’s through simulations, project-based learning, or engaging multimedia content, we provide tools that make learning both impactful and fun. Teachers can easily align these resources with their science curriculum, making it simple to incorporate SDG-focused lessons in any classroom setting.</p>

                <h4>Get Started Today!</h4>
                <p>Join us in empowering students to think critically and act responsibly for a sustainable future. Explore the lesson plans, activities, and resources on our platform to start making a global impact—one classroom at a time.</p>
                <h3 className="cards-heading">History</h3>
                <div className="cards-container">
                    <div className="card">
                        <h3>Rio Earth Summit (1992): </h3>
                        <p>The concept of sustainable development was first introduced on a global scale at the United Nations Conference on Environment and Development in Rio de Janeiro.</p>
                    </div>
                    <div className="card">
                        <h3>Millennium Development Goals (MDGs) (2000-2015): </h3>
                        <p>The MDGs were a set of eight international development goals established to address poverty, hunger, disease, and education by 2015.</p>
                    </div>
                    <div className="card">
                        <h3>Adoption of the SDGs (2015): </h3>
                        <p>The 17 Sustainable Development Goals were adopted by all United Nations Member States in 2015 as part of the 2030 Agenda for Sustainable Development.</p>
                    </div>
                    <div className="card">
                        <h3>Implementation (2016-Present):</h3>
                        <p>The SDGs came into effect on January 1, 2016, and countries have been working towards achieving these goals through national and international efforts.</p>
                    </div>
                </div>
                <h3 className="country-heading">Top 5 Participating Countries</h3>
                <ul className="country-list">
                    {countries.map((country, index) => (
                        <li key={index} className="country-item">
                            <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
                            <span>{country.name}</span>
                        </li>
                    ))}
                </ul>
                <h3 className="achievements-heading">Achievements</h3>
                <div className="achievements">
                    <div className="achievement-box">
                        <div className="achievement">
                            <div className="achievement-number-circle">
                                <div className="achievement-number">90%</div>
                            </div>
                            <div className="achievement-description">Over 90% of global population has now access to clean drinking water</div>
                        </div>
                        <div className="divider"></div>
                        <div className="achievement">
                            <div className="achievement-number-circle">
                                <div className="achievement-number">50%</div>
                            </div>
                            <div className="achievement-description">Female Labour force participation has increased to 50% in 2022</div>
                        </div>
                        <div className="divider"></div>
                        <div className="achievement">
                            <div className="achievement-number-circle">
                                <div className="achievement-number">87%</div>
                            </div>
                            <div className="achievement-description">Secondary school enrollment rates have also improved from 84% to 87%</div>
                        </div>
                    </div>
                </div>
            {/* <h3 className="cards-heading">History</h3>
            <div className="cards-container">
                <div className="card">
                    <h3>Rio Earth Summit (1992): </h3>
                    <p>The concept of sustainable development was first introduced on a global scale at the United Nations Conference on Environment and Development in Rio de Janeiro.</p>
                </div>
                <div className="card">
                    <h3>Millennium Development Goals (MDGs) (2000-2015): </h3>
                    <p>The MDGs were a set of eight international development goals established to address poverty, hunger, disease, and education by 2015.</p>
                </div>
                <div className="card">
                    <h3>Adoption of the SDGs (2015): </h3>
                    <p>The 17 Sustainable Development Goals were adopted by all United Nations Member States in 2015 as part of the 2030 Agenda for Sustainable Development.</p>
                </div>
                <div className="card">
                    <h3>Implementation (2016-Present):</h3>
                    <p>The SDGs came into effect on January 1, 2016, and countries have been working towards achieving these goals through national and international efforts.</p>
                </div>
            </div> */}
            <h3 className="timeline-heading">Upcoming Events</h3>
            <div className="home-container" >
                <div className="timeline-container">
                    <div className="timeline-event">
                        <div className="timeline-content">
                            <h3>UN Ocean Conference 2025: </h3>
                            <p>Scheduled for June 9-13, 2025, in Nice, France, this conference will focus on "Our Ocean, Our Future, Our Responsibility." It aims to address the critical role of oceans in sustainable development.</p>
                        </div>
                        <div className="timeline-arrow"></div>
                    </div>
                    <div className="timeline-event">
                        <div className="timeline-content">
                            <h3>10th Multi-Stakeholder Forum on Science, Technology, and Innovation for the SDGs: </h3>
                            <p>This event will take place from May 7-8, 2025, and will bring together stakeholders to discuss how science, technology, and innovation can accelerate progress towards the SDGs.</p>
                        </div>
                        <div className="timeline-arrow"></div>
                    </div>
                    <div className="timeline-event">
                        <div className="timeline-content">
                            <h3>Asia-Pacific GSDR Launch and Workshop: </h3>
                            <p>From October 22-24, 2024, in New Delhi, India, this event will focus on the Global Sustainable Development Report (GSDR), which is produced every four years by an independent group of scientists appointed by the UN Secretary-General.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-layout">
                <div className="left-section">
                    <div className="section">
                        <ul>
                            <li>Global Well-being:
SDGs aim to end poverty, reduce inequality, and ensure good health for all, leading to a better quality of life globally.
</li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>Environmental Protection:
They promote sustainable practices, like reducing pollution and conserving natural resources, to safeguard our planet for future generations.
</li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>Economic Growth:
                            SDGs drive inclusive and sustainable economic development, creating jobs and improving living standards worldwide.</li>
                        </ul>
                    </div>
                </div>
                <div className="right-section">
                    <h2><b>Why are SDGs important?</b></h2>
                    <button onClick={() => window.location.href='https://www.shiksha.com/online-courses/articles/importance-of-sustainable-development-and-its-objectives/'}>To Know More</button>
                </div>
            </div>
            <div className="developer-section">
                <h3>Meet the Developers</h3>
                <div className="developer-cards">
                    {developers.map((developer, index) => (
                        <div key={index} className="developer-card">
                            <div className="developer-info">
                                <h4>{developer.name}</h4>
                                <p>{developer.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
</div>
);
}

export default HomePage;
