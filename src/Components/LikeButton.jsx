import React from "react";

const LikeButton = (props) => {
  console.log(props);

  const changeColour = props.like ? "#FFAB00" : "#f83600";

  return (
    <div>
      <button
        onClick={() => props.setLike(!props.like)}
        style={{ backgroundColor: changeColour }}
        className="button"
      >
        Like
      </button>
      <div className="likeButtonContainer">
        {props.like && <p className="likedText">This quote is dope!</p>}
      </div>
    </div>
  );
};

export default LikeButton;
