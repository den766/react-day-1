import { useState } from "react";
import AddNote1 from "./addnote";

function App2() {
  const [notes, setNote] = useState([]);

  function addNote(title, desc) {
    const newNOte = {
      title,
      desc,
    };

    setNote([...notes , newNOte]);
    console.log(notes);
  }

  console.log(notes);

  return (
    <>
      <AddNote1 addNote={addNote} />
    </>
  );
}

export default App2;
