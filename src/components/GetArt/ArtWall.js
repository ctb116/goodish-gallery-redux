import React from "react";
import Image from "./Image";

const ArtWall = (props) => {
  return (
    <div className="grid">
      {props.images.map((image) => (
        <Image image={image} onView={props.handleView} key={image.id} />
      ))}
    </div>
  );
};

export default ArtWall;
