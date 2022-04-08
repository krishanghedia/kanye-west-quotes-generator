import React from "react";

const Quote = (props) => {
  console.log(props.quote);
  return (
    <>
      {props.quote.map((item, key) => {
        return (
          <div className="kanyeQuoteContainer" key={key}>
            <div className="quoteBox">
              <blockquote className="kanyeQuote">"{item.quote}"</blockquote>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Quote;
