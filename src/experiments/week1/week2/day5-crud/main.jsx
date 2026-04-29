import { useState } from "react";
import AddNote1 from "./addnote";
import ShowNoteList from "./shownotelist";

function App2() {
  const [notes, setNote] = useState([]);

  function addNote(title, desc) {
    const newNOte = {
      id: Date.now(),
      title,
      desc,
    };

    // notes.push(newNOte);

    // setNote(notes);
    setNote([...notes, newNOte]);
    console.log(notes);
  }

  function deleteNote(id) {
    setNote(
      notes.filter((note) => {
        return note.id !== id;
      }),
    );
  }

  console.log(notes);

  return (
    <>
      <AddNote1 addNote={addNote} />
      <ShowNoteList notes={notes} onDeleteNote={deleteNote} />
    </>
  );
}

export default App2;
