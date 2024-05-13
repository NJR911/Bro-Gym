import './testimonial.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    content:
      "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
    author: "Max Cooper",
    occupation: "Software Developer",
    rating: 4.5,
    image: "./src/assets/member.png",
  },
  {
    content:
      "I've been a member of this gym for over a year now, and I can confidently say it's the best fitness facility in town. The equipment is top-notch, the classes are engaging, and the staff is always friendly and supportive. Highly recommend!",
    author: "John Smith",
    occupation: "Marketing Manager",
    rating: 5,
    image: "./src/assets/member2.png",
  },
  {
    content:
      "I joined this gym to improve my overall health and fitness, and I couldn't be happier with my decision. The trainers are incredibly motivating, and the atmosphere is always positive. Plus, the variety of classes keeps me coming back for more!",
    author: "Emily Davis",
    occupation: "Teacher",
    rating: 4.8,
    image: "./src/assets/member3.png",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="review">
      <div className="review-container">
        <span className="i">
          <FontAwesomeIcon icon={faQuoteRight} />
        </span>
        <div className="review-content">
          <h4>MEMBER REVIEW</h4>
          <p>{reviews[currentIndex].content}</p>
          <div className="review-rating">
            {[...Array(Math.floor(reviews[currentIndex].rating))].map((_, index) => (
              <span key={index}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
            {reviews[currentIndex].rating % 1 !== 0 && (
              <span>
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </span>
            )}
          </div>
          <div className="review-footer">
            <div className="review-member">
              <img src={reviews[currentIndex].image} alt="member" />
              <div className="review-member-details">
                <h4>{reviews[currentIndex].author}</h4>
                <p>{reviews[currentIndex].occupation}</p>
              </div>
            </div>
            <div className="review-nav">
              <span onClick={handlePrev}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              <span onClick={handleNext}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

