function ShowNoteList({ notes, onDeleteNote, onEditNote }) {
  return (
    <>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <h1>{note.title}</h1>
              <p>{note.desc}</p>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
              <button
                onClick={() => {
                  const newTitle = prompt("Enter new title", note.title);
                  const newDesc = prompt("Enter new desc", note.desc);

                  onEditNote(note.id, {
                    ...note,
                    title: newTitle,
                    desc: newDesc,
                  });
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ShowNoteList;
