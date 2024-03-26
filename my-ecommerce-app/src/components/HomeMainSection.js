import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import reviews from '../data/review'; 

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      let randomIndices = [];
      while(randomIndices.length < 2){
        let r = Math.floor(Math.random() * reviews.length);
        if(randomIndices.indexOf(r) === -1) randomIndices.push(r);
      }
      return randomIndices.map(index => reviews[index]);
    }

    setRandomReviews(getRandomReviews());
  }, []);

  return (
    <main>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
        <button><Link to="/products">Shop Now</Link></button>
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index}>
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <p>{"★".repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;