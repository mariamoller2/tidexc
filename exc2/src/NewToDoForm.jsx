import { useState } from "react";

//onAdd is a function coming from ToDoList where it is called handleAdd
//this componen does not know what onAdd does it just knows it can call it
export default function NewToDoForm({ onAdd }) {
  //This is the state of the half finsihed text menaing everything before the user press add or enter
  //We need this because two things depend on this state. wihtout it the textbox would be wiped clean after every key stroke
  //and the add-button would know now if it should bed diabled
  const [text, setText] = useState("");

  function handleSubmit(event) {
    //to avoid updating the website
    event.preventDefault();
    //This is where the function handleAdd from ToDoList is called
    //text is what the user typed.
    // //This is the only line where the value leaves this component
    onAdd(text);
    //Clears the field so it is ready for a new task
    setText("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="New Task"
      />
      <button disabled={text.trim().length === 0}>Add</button>
    </form>
  );
}
