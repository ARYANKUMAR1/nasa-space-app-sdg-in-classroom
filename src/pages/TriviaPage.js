import React, { useState } from "react";
import "../styles/Trivia.css";

const questions = [
    {
        question: " What does SDG stand for?",
        options: [" Sustainable Development Goals", " Special Development Goals", " Systematic Development Goals", " Significant Development Goals"],
        answer: "Sustainable Development Goals"
    },
    {
        question: "How many Sustainable Development Goals are there",
        options: ["10", "15", "17", "20"],
        answer: "17"
    },
    {
        question: "Which of the following is NOT a Sustainable Development Goal",
        options: ["No Poverty", "Quality Education", "Healthy Oceans", "Clean Water and Sanitation"],
        answer: "Healthy Oceans"
    },
    {
        question: "Why are the Sustainable Development Goals important",
        options: ["They help business grow", "They aim to end global issues like poverty and inequality", "They promote individual access", "They focus only on enviromental protection"],
        answer: "They aim to end global issues like poverty and inequality"
    },
    {
        question: "What is the target year for achieveing all SGDs",
        options: ["2025", "2030", "2040", "2050"],
        answer: "2030"
    },
    {
        question: "What are some challenges faced in achieveing the SGDs",
        options: ["Lack of resources and political will", "Overpopulation and urbanization", "Climate change and environmental degradation", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "How does achieving SDG 2 (Zero Hunger) contribute to other SDGs",
        options: ["By improving health, reducing poverty,and promoting sustainable agriculture", "By promoting innovation and infrastrucutre ", "By ensuring affordable and cleane enrgy", "By reducing inequalities within and among countries"],
        answer: "By improving health, reducing poverty,and promoting sustainable agriculture"
    },
    {
        question: "Why is it important to ensure inclusive and equitable quality education for all (SDG 4)?",
        options: ["It enhances employment opportunities and reduces inequalities", "It provides clean water", "It promotes life  below water", "It supports industry and innovation"],
        answer: "It enhances employment opportunities and reduces inequalities"
    },
    {
        question: "How does SDG 6 (Clean Water and Sanitation) address water scarcity and quality? ",
        options: ["By limiting access to water ", "By improving water quality, reducing pollution, and increasing water-use efficiency", "By focusing only on urban areas", "By ignoring sanitation issues"],
        answer: "By improving water quality, reducing pollution, and increasing water use efficiency"
    },
    {
        question: "What approaches does SDG 15 (Life on Land) take to protect terrestrial ecosystems?",
        options: ["By promoting deforestation", "By combating desertification, restoring degraded land, and conserving biodiversity", "By focusing only on agricultural land", "By ignoring forest conservation"],
        answer: "By combating desertification, restoring degraded land, and conserving biodiversity"
    },
    // Add more questions here
];


//v2 12:48pm

const TriviaPage = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleOptionChange = (questionIndex, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: option
        });
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    return (
        <div className="trivia-page">
            <h2>Trivia Quiz</h2>
            {questions.map((q, index) => (
                <div key={index} className="question-block">
                    <h3>{`Q${index + 1}. ${q.question}`}</h3>
                    {q.options.map((option, i) => (
                        <div key={i}>
                            <input
                                type="radio"
                                id={`q${index}_option${i}`}
                                name={`question${index}`}
                                value={option}
                                checked={selectedOptions[index] === option}
                                onChange={() => handleOptionChange(index, option)}
                            />
                            <label htmlFor={`q${index}_option${i}`}>{option}</label>
                        </div>
                    ))}
                    {showResults && (
                        <p>
                            {selectedOptions[index] === q.answer
                                ? "Correct!"
                                : `Wrong! The correct answer is ${q.answer}`}
                        </p>
                    )}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default TriviaPage;