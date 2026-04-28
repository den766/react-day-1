import { useState } from "react";

function FormHandling() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Title length must be greater than 3");
      return;
    }

    if (desc.trim().length < 5) {
      setError("Description length must be greater than 5");
      return;
    }

    setError("");

    const notes = {
      title,
      desc,
    };

    console.log(notes);

    setTitle("");
    setDesc("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />

        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button>Add</button>
      </form>
    </>
  );
}

export default FormHandling;
