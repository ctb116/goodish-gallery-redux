import React from "react";

const TagsFilterButton = ({ id, label, isSelected, onCheckboxChange, buttonbackground }) => (
  <label 
    className={isSelected ? 'tagsfilterbutton' : 'tagsfilterbuttonSelected'} 
    id={id}
    >
    <img src={buttonbackground} alt="featured drawing"></img>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={event => onCheckboxChange(event.target.name)}
      className="form-check-input"
      />
    {label}
  </label>
);

export default TagsFilterButton;
