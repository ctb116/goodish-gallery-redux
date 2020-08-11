import React from "react";
import "../styles/image.css";

const Image = (props) => {
  console.log(props);
  return (
    <div>
      <img
        className="grid-image"
        src={props.image.imgUrl}
        alt={props.image.name}
        onClick={() => props.onView(props.image)}
      />
    </div>
  );
};

export default Image;
