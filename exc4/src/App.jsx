import "./App.css";
import ToDoList from "./ToDoList.jsx";
import { useState } from "react";
import Parse from "parse";

Parse.serverURL = "https://parseapi.back4app.com/"; // your PARSE_SERVER_URL
Parse.initialize(
  "IiA5iNxoIGFLRoIh0y77GScC9GEOcMSB78tjP8YB",
  "b7VP9yfletT5iOeFkmHrp522JX1mJMLaYroxMKOr",
);

function App() {
  const annasToDoList = ["Call the landlord", "Book the dentist"];

  const [name, setName] = useState("Anna");

  return (
    <>
      <ToDoList firstName={name} />
    </>
  );
}

export default App;
