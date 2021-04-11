import React from "react";
import TagsFilterButton from "./TagsFilterButton";
import './../styles/tagsFilter.css';

const TagsFilterList = ({checkboxObj, onCheckboxChange, buttonbackground}) => {
  //object passed as prob converted to array
  let checkboxArray = Object.entries(checkboxObj);
  let count = 0;
  return (
    <div id="tagsfilterGrid">
      {checkboxArray.map((checkbox) => (
        <TagsFilterButton
          buttonbackground={buttonbackground}
          id = {`tagsFilterItem-${count += 1}`}
          label={checkbox[0]}
          isSelected={checkbox[1]}
          onCheckboxChange={onCheckboxChange}
          key={checkbox}
        />
      ))}
    </div>
  );
}

export default TagsFilterList;
