import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Quote from "./Components/Quote";
import Grapic from "./Components/Graphic";
import GenerateQuoteButton from "./Components/GenerateQuoteButton";

const App = () => {
  const URL = "https://api.kanye.rest"; // API url
  const [quotes, getQuotes] = useState([]); // get quotes from api and set the state
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  useEffect(() => {
    kanyeQuotes();
  }, []);

  const update = () => {
    kanyeQuotes();
    setLike(false);
    setDisLike(false);
  };

  const clearState = () => {
    setLike("");
    setDisLike("");
  };

  const kanyeQuotes = async () => {
    try {
      const response = await axios.get(URL);
      getQuotes([response.data]);
    } catch (error) {
      console.log("An unexpected error occured", error);
    }
  };

  return (
    <>
      <Grapic />
      <div className="header">
        <h1>KANYE WEST</h1>
      </div>
      <Quote quote={quotes} />
      <GenerateQuoteButton
        like={like}
        setLike={setLike}
        disLike={disLike}
        setDisLike={setDisLike}
        update={update}
        clearState={clearState}
      />
    </>
  );
};

export default App;
