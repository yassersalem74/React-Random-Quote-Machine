import React, { useState } from "react";
import QuoteChild from "./QuoteChild";
import { quotes } from "./../data/data";

const RandomQuoteMachine = ({ title }) => {
  const [quote, setQuote] = useState(quotes[0]);

  const returnQuote = () => {
    const key = Math.floor(Math.random() * quotes.length);
    return quotes[key];
  };

  const handleClick = () => {
    const randomQuote = returnQuote();
    setQuote(randomQuote);
  };

  const randomColor = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)})`;
    console.log("Generated color:", color);
    return color;
  };

  return (
    <div>
      <div className={`box content`} id="quote-box">
        <h1>{title}</h1>
        <p>
          <QuoteChild
            quote={quote}
            handleClick={handleClick}
            displayColor={randomColor}
          />
        </p>

      </div>
        <div className="text-center">
          <a href="https://www.linkedin.com/in/yasser-salem-118b7b214/" target="_blanck" className="yasser">By :Yasser Salem</a>
        </div>
    </div>
  );
};

export default RandomQuoteMachine;
