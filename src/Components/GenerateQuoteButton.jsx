import React from "react";
import LikeButton from "../Components/LikeButton";
import DisLikeButton from "./DisLikeButton";

const GenerateQuoteButton = (props) => {
  console.log(props);
  return (
    <div className="buttonContainer">
      <button type="button" className="button" onClick={() => props.update()}>
        Next Quote
      </button>
      <LikeButton like={props.like} setLike={props.setLike} />
      <DisLikeButton disLike={props.disLike} setDisLike={props.setDisLike} />
    </div>
  );
};

export default GenerateQuoteButton;
