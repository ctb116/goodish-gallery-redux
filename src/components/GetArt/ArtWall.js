import React from "react";
import Image from "./Image";

const ArtWall = ({images, handleView}) => {
  return (
    <div className="grid">
      {
        Object.keys(images).map((key) => (
          <Image image={images[key].imgUrl} onView={handleView} key={key} />
        ))
      }
    </div>
  );
};

export default ArtWall;
