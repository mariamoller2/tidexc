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
    //making it a form instead of button does so that we can press enter to add
    <form onSubmit={(e) => handleSubmit(e)}>
      {/** a controlled input (still unsure what than means)
       * it makes the field display whatever is in state, so
       * text  is the text from the state
       */}
      <input
        value={text}
        //OnChange happens every time the user puts a letter into the field
        /** The event is the object the browser creates describing what happended
         * Event contains a lot. its like a full report of what happened
         * event.target: the element the event happened ont which in this case is the <input> itself
         * event.target.value: every <input> element has a value property holding wthe text currently in it
         * so .value reads that text. its the string that is handed to setText
         * so: Reading it left to right: from the event, get the element, from the element, get its text.
         */
        onChange={(event) => setText(event.target.value)}
        //placeholder for when text is "" (empty)
        placeholder="New Task"
      />
      {/**makes the add button grey when nothing is typed
       * it cannot be clicked if it is grey
       */}
      <button disabled={text.trim().length === 0}>Add</button>
    </form>
  );
}
