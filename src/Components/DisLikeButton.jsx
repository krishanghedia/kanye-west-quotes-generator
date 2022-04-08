import React from "react";

const DisLikeButton = (props) => {
  console.log(props);

  const changeColour = props.disLike ? "#FFAB00" : "#f83600";

  const randomMessages = [
    "Eurgh",
    "I miss the old Kanye",
    "Stop your behaviour",
    "Cut the crap",
  ];

  const setRandomMessage = () => {
    const getRandomInt = Math.floor(Math.random() * randomMessages.length);
    const getRandomMessage = randomMessages[getRandomInt];
    return getRandomMessage;
  };

  return (
    <div>
      <button
        onClick={() => props.setDisLike(!props.disLike)}
        style={{ backgroundColor: changeColour }}
        className="button"
      >
        DisLike
      </button>
      <div className="likeButtonContainer">
        {props.disLike && <p className="likedText">{setRandomMessage()}</p>}
      </div>
    </div>
  );
};

export default DisLikeButton;
