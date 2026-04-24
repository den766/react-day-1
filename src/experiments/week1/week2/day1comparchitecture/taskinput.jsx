import { useState } from "react";


function TaskInputForm({ onAddTask }) {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="input-section">
        <input
          className="input"
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
        className="btn"
          onClick={() => {
            if (input.trim() === "") return;

            onAddTask(input);
            setInput(""); 
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default TaskInputForm;
