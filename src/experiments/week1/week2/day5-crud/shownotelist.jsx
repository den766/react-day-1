function ShowNoteList({ notes }) {
  return (
    <>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <h1>{note.title}</h1>
              <p>{note.desc}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ShowNoteList;
