import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const TagsFilterButton = ({ id, label, isSelected, onCheckboxChange, buttonbackground }) => {
  
  useFirestoreConnect([
    { type: 'once', collection: "allImages", }
  ])

  const images = useSelector((state) => state.firestore.ordered.allImages);
  const fanartFilter = images.filter((image) => image.tags.fanart === true);
  let fanartRandom = fanartFilter[Math.floor(Math.random() * fanartFilter.length)];


  return (
  <label 
    className={isSelected ? 'tagsfilterbutton' : 'tagsfilterbuttonSelected'} 
    id={id}
    >
    <img src={fanartRandom.imgUrl} alt="featured drawing"></img>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={event => onCheckboxChange(event.target.name)}
      className="form-check-input"
      />
    {label}
  </label>
  )
};

export default TagsFilterButton;
