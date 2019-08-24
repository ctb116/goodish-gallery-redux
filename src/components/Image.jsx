import React from "react";

const Image = props => {
  return (
    <React.Fragment>
      <img
        src={props.image.url}
        alt={props.image.name}
        style={{ width: "100%", borderRadius: 5 }}
        onClick={() => props.onView(props.image)}
      />
    </React.Fragment>
  );
};

export default Image;
