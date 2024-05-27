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
        {
            id: 4,
            question: "What should I bring to the gym?",
            answer: "We recommend bringing a water bottle, a towel, and appropriate workout attire. Lockers are available to store your personal items."
        },
        {
            id: 5,
            question: "Can I freeze my membership?",
            answer: "Yes, you can freeze your membership for up to three months in a year. Please contact our support team for assistance."
        },
        {
            id: 6,
            question: "Is there a membership cancellation fee?",
            answer: "There is no cancellation fee if you cancel your membership with a 30-day notice. If you cancel without notice, a fee may apply."
        },
        {
            id: 7,
            question: "Do you offer family memberships?",
            answer: "Yes, we offer family memberships. Contact our front desk for pricing and more details."
        },
        {
            id: 8,
            question: "Are there any age restrictions for gym members?",
            answer: "Members must be at least 16 years old. Minors (ages 16-17) must have a parent or guardian sign a waiver."
        },
        {
            id: 9,
            question: "Do you have parking facilities?",
            answer: "Yes, we have free parking available for all our members."
        },
        {
            id: 10,
            question: "What safety measures are in place for COVID-19?",
            answer: "We follow all local health guidelines, including regular sanitization of equipment, social distancing, and mask requirements in common areas."
        }
    ];

    const handleQuestionClick = (questionId) => {
        if (selectedQuestion === questionId) {
            setSelectedQuestion(null); 
        } else {
            setSelectedQuestion(questionId); 
        }
    };

    return (
        <>
            <div style={{ height: "130vh", background: "#0a0a0a" }}>
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

