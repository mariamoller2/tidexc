import { useState } from "react";
import NewToDoForm from "./NewToDoForm";

//The actual component. A bit confusing to me that it has the same name as toDoList just with big T
//the two {} are deconstruction of props. react calls the component with one object and from the object we unpack two fields
export default function ToDoList({ firstName, todos }) {
  /* An inline style object, plain JS */
  let h1Style = { color: "deeppink", backgroundColor: "white" };
  //a constant:
  //useState(todos) returns an array of two elements and [a, b] = is array destructuring and unpacking them into two variables
  //The first is the state menaing the CURRENT value. on first render it just contains whatever todos contains
  //please note this DOES NOT change the originial todos (the prop)
  //The second (setToDoList) is the setter function (btw the word "set" has no functionality it is just conevenient to use)
  //In other words: index 0 is the value, index 1 is the function that updates it
  const [toDoList, setToDoList] = useState(todos);

  //an event handler that gets passed down to a child that will call it.
  //text is the value NewToDoForm sends
  function handleAdd(text) {
    //the thre dots ... is called spread. it just says build a new array with the old content + text
    //it is an immutable update. react requires this because it compares refferences
    setToDoList([...toDoList, text]);
  }

  //everything below is JSX
  // the coment needs to be wrapped in {}
  return (
    <>
      {" "}
      {/*when there are {} it means this is javascript*/}
      <h1 style={h1Style}>To Do List for {firstName}</h1>
      {/**this renders a child component and passes handleAdd down as a prop named onAdd
       * This is a pattern called "lifting state up". It means that the state lives here in this component
       * and the form only gets to call a function
       */}
      <NewToDoForm onAdd={handleAdd} />
      <ul>
        {/**.map produces an array of elements.
         * the => shows an arrow function. to the left of it is the paramteres and to the right is what is returned
         * key is a special prop React uses to match elements across renders
         * OBS: the text here and the text in handleAdd have nothing to do with each other
         */}
        {toDoList.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </>
  );
}
