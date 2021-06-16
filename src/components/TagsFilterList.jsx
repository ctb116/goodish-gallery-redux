import React from "react";
import TagsFilterButton from "./TagsFilterButton";
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import './../styles/tagsFilter.css';

const TagsFilterList = ({checkboxObj, onCheckboxChange}) => {

  useFirestoreConnect([
    { type: 'once', collection: "allImages", where: [['tags.fanart', '==', true]]}
  ])

  const images = useSelector((state) => state.firestore.ordered.allImages);

  console.log(images)

  // const fanartFilter = images.filter((image) => image.tags.fanart === true);
  // const commissionFilter = images.filter((image) => image.tags.commission === true);
  // const matureFilter = images.filter((image) => image.tags.mature === true);
  // let buttonbackground = fanartFilter[1];

  // console.log(buttonbackground)

  //object passed as prob converted to array
  let checkboxArray = Object.entries(checkboxObj);
  let count = 0;
  return (
    <div id="tagsfilterGrid">
      {checkboxArray.map((checkbox) => (
        <TagsFilterButton
          // buttonbackground={buttonbackground}
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
