'use client';
import React, { useState, useEffect } from 'react';

interface Quote {
  id: number;
  text: string;
  author: string;
}

interface QuoteCarouselProps {
  quotes: Quote[];
}

const QuoteCarousel: React.FC<QuoteCarouselProps> = ({ quotes }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div>
      <p>{quotes[currentQuoteIndex].text}</p>
      <small>- {quotes[currentQuoteIndex].author}</small>
    </div>
  );
};

export default QuoteCarousel;
