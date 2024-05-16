import { useState } from "react";


export default function FAQ(){

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: "What are the gym's opening hours?",
            answer: "Our gym is open Monday to Friday from 9:00 AM to 11:00 PM and Saturday to Sunday from 10:00 AM to 6:00 PM."
        },
        {
            id: 2,
            question: "Do you offer personal training sessions?",
            answer: "Yes, we offer personal training sessions. Please contact our front desk for more information and to schedule a session."
        },
        {
            id: 3,
            question: "Are group fitness classes included in my membership?",
            answer: "Yes, group fitness classes are included in some membership plans. Please check with our staff for details."
        },
    ];

    const handleQuestionClick = (questionId) => {
        if (selectedQuestion === questionId) {
            setSelectedQuestion(null); // Collapse the question if already selected
        } else {
            setSelectedQuestion(questionId); // Expand the question
        }
    };

    return (
        <>
            <div style={{ height: "100vh", background: "#0a0a0a" }}>
                <h1 className="faq-h1">Frequently Asked Questions</h1>
                
                <div className="faq-container">
                    <div className="faq-list">
                        {questions.map((q) => (
                            <div key={q.id} className="faq-item" onClick={() => handleQuestionClick(q.id)}>
                                <div className="question">Q: {q.question}</div>
                                {selectedQuestion === q.id && <div className="answer">A: {q.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

