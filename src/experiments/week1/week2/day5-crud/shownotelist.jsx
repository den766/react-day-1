function ShowNoteList({ notes, onDeleteNote }) {
  return (
    <>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <h1>{note.title}</h1>
              <p>{note.desc}</p>
               <button onClick={()=> onDeleteNote(note.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ShowNoteList;
