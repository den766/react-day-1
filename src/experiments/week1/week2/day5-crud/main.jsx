import { useState } from "react";
import AddNote1 from "./addnote";
import ShowNoteList from "./shownotelist";

function App2() {
  const [notes, setNote] = useState([]);

  function addNote(title, desc) {
    const newNOte = {
      id : Date.now(),
      title,
      desc,
    };

    // notes.push(newNOte);

    // setNote(notes);
    setNote([...notes, newNOte]);
    console.log(notes);
  }

  console.log(notes);

  return (
    <>
      <AddNote1 addNote={addNote} />
      <ShowNoteList notes={notes}/>
    </>
  );
}

export default App2;
