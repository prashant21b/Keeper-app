import React from "react";
import {RiDeleteBin6Line} from 'react-icons/ri'
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className='delete'onClick={handleClick}><RiDeleteBin6Line/></button>
     
    </div>
  );
}

export default Note;
