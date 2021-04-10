import React, { Component } from "react";
import Checkbox from "./TagsFilterButton";
import './../styles/tagsFilter.css';

class CheckboxList extends Component {
  render() {
    //object passed as prob converted to array
    let checkboxArray = Object.entries(this.props.checkboxObj);
    let count = 0;
    return (
      <div id="tagsfilterGrid">
        {checkboxArray.map((checkbox) => (
          <Checkbox
            id = {`tagsFilterItem-${count += 1}`}
            label={checkbox[0]}
            isSelected={checkbox[1]}
            onCheckboxChange={this.props.onCheckboxChange}
            key={checkbox}
          />
        ))}
      </div>
    );
  }
}

export default CheckboxList;
