import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNote from "./NewNote";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = React.useState([
    {
      key: uuidv4(),
      title: "Starting Note",
      content: "Use the keeper app!",
    },
  ]);

  function handleSubmit(note) {
    console.log(note);

    setNotes((notes) => [...notes, note]);
    console.log(notes);
  }

  function deleteNote(id) {
    console.log("deleted " + id);
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NewNote onClick={handleSubmit} />
      {notes.map((notes, index) => (
        <Note key={index} id={index} title={notes.title} content={notes.content} onClick={deleteNote} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
