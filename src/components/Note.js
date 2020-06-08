import React from "react";


function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span onClick={() => { props.onClick(props.id);}}>delete</span>
    </div>
  );
}

export default Note;
