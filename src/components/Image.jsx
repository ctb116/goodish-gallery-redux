import React from "react";

const Image = props => {
  return (
    <figure>
      <img
        src={props.image.url}
        alt={props.image.name}
        style={{ width: "100%" }}
        onClick={() => props.onView(props.image)}
      />
    </figure>
  );
};

export default Image;
