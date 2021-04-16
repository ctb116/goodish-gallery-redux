import React from "react";

const TagsFilterButton = React.memo(({ id, label, isSelected, onCheckboxChange, buttonbackground }) => {
  
  const test = React.useRef(buttonbackground);

  console.log("button rendering")
  
  return (
  <label 
    className={isSelected ? 'tagsfilterbutton' : 'tagsfilterbuttonSelected'} 
    id={id}
    >
    <img src={test.current} alt="featured drawing"></img>
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
});

export default TagsFilterButton;
