import React, { useEffect } from 'react';

const QuoteChild = ({ quote, handleClick, displayColor }) => {
  const createTweetLink = () => {
    let ahref = ["https://twitter.com/intent/tweet?text=", quote[0]];
    return ahref.join("");
  };

  useEffect(() => {
    const color = displayColor();

    // Apply color to body background
    document.body.style.backgroundColor = color;

    // Apply color to text and author elements
    document.getElementById('text').style.color = color;
    document.getElementById('author').style.color = color;
    
    // Apply color to buttons
    const buttons = document.querySelectorAll('#new-quote, #tweet-quote');
    buttons.forEach(button => {
      button.style.backgroundColor = color;
      button.style.color = '#fff'; 
    });
  
    // Clean up the effect on component unmount
    return () => {
      document.body.style.backgroundColor = '';
      document.getElementById('text').style.color = '';
      document.getElementById('author').style.color = '';
  
      // Reset button colors
      buttons.forEach(button => {
        button.style.backgroundColor = '';
        button.style.color = '';
      });
    };
  }, [displayColor]);

  return (
    <div>
      <h1 id="text">"{quote[0]}"</h1>
      <h5 id="author">-{quote[1] ? quote[1] : 'Unknown'}-</h5>
      <button id="new-quote" onClick={handleClick}>
        new quote
      </button>{" "}
      <a href={createTweetLink()} target="_blank" id="tweet-quote">
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteChild;
