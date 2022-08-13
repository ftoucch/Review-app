import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [review, setReview] = useState(0); // set index

  const { name, job, image, text } = people[review]; // destructure peope data from data.js

  // function to always check that when next and prev it does not surpas the review count
  const checkValue = (number) => {
    if (number < 0) {
      return people.length - 1;
    }

    if (number > people.length - 1) {
      return 0;
    }

    return number;
  };

  // next review button funtion
  const nextReview = () => {
    setReview((review) => {
      let newIndex = review + 1;
      return checkValue(newIndex);
    });
  };

  //prev review button function
  const prevReview = () => {
    setReview((review) => {
      let newIndex = review - 1;
      return checkValue(newIndex);
    });
  };

  // random button function
  const supriseMe = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === review) {
      randomNumber = review + 1;
    }
    setReview(checkValue(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img" alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={supriseMe}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
