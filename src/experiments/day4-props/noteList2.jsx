import Notecard2 from "./notecardprops";

function NoteList2() {
  return (
    <div>
      <Notecard2
        title="Learn React"
        description="Understand props"
        priority={1}
      />
      <Notecard2
        title="Practice coding"
        description="Build small projects"
        priority={2}
      />

      <Notecard2
        title="Study JavaScript"
        description="Strengthen fundamentals"
        priority={3}
      />
    </div>
  );
}

export default NoteList2;
