import { useState } from "react";

function ControlledInput() {
  const [title, setTitle] = useState("");

  //   if(title.length < 3 ) alert("Too short");

  console.log(title);

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="typehere..."
      />

      <p>{title}</p>

      {title.length > 0 && title.length < 3 && (
        <p style={{ color: "red" }}>Too short</p>
      )}

      <button onClick={() => setTitle("")}>clearInput</button>
    </>
  );
}

export default ControlledInput;
