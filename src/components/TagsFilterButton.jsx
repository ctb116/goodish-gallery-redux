import React from "react";

const Checkbox = ({ id, label, isSelected, onCheckboxChange }) => (
  <label className={isSelected ? 'tagsfilterbutton' : 'tagsfilterbuttonSelected'} id={id}>
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

export default Checkbox;
