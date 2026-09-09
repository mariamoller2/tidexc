import "./App.css";
import ToDoList from "./ToDoList.jsx";
import ToDoPanel from "./ToDoPanel.jsx";

function App() {
  const annasToDoList = [
    { id: "anna-1", text: "call the landlord", done: false },
    { id: "anna-2", text: "Book dentist", done: false },
  ];
  const konstantinaToDoList = [
    { id: "kon-1", text: "buy milk", done: false },
    { id: "kon-2", text: "water plants", done: false },
  ];

  return (
    <>
      <ToDoList firstName={"Anna"} todos={annasToDoList} />
      <ToDoList firstName={"Konstantina"} todos={konstantinaToDoList} />
    </>
  );
}

export default App;
