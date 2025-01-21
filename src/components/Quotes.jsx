import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        setQuoteData(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching quote");
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="card">
      <div className="quotes-container card-body">
        <p className="card-text">"{quoteData.quote}"</p>
        <footer className="quote-author"><strong>--</strong>&nbsp;{quoteData.author}</footer>
      </div>
    </div>
  );
};

export default Quotes;
