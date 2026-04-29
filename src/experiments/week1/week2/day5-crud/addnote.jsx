import { useState } from "react";

function AddNote1({ addNote }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <button onClick={()=> addNote(title, desc)}>ADD</button>
    </>
  );
}

export default AddNote1;
