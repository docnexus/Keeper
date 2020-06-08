import React from "react";
import { v4 as uuidv4 } from "uuid";

function NewNote(props) {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredContent, setEnteredContent] = React.useState("");

  function handleTitleChange(event) {
    setEnteredTitle(event.target.value);
  }

  function handleContentChange(event) {
    setEnteredContent(event.target.value);
  }

  function handleClick(event) {
    const newNote = {
      key: uuidv4(),
      title: enteredTitle,
      content: enteredContent,
    };
    props.onClick(newNote);
    setEnteredTitle("Enter a new title");
    setEnteredContent("Enter new content");
    event.preventDefault();
  }



  return (
    <div className="note">
      <form>
        <input
          type="text"
          placeholder="Enter a new Title"
          value={enteredTitle}
          onChange={handleTitleChange}
        ></input>
        <input
          type="text"
          placeholder="Enter a new Content"
          value={enteredContent}
          onChange={handleContentChange}
        ></input>
        <br />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default NewNote;
