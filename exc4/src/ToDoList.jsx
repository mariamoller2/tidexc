import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm.jsx";
import ToDoItem from "./ToDoItem.jsx";
import Parse from "parse";
import {
  fetchTodos,
  createTodo,
  setTodoDone,
  deleteTodo,
} from "./services/todoService.js";

export default function ToDoList({ firstName }) {
  let h1Style = { color: "deeppink", backgroundColor: "white" };

  function loadTodos() {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  }

  const [todos, setTodos] = useState([]);

  // newTaskText is a string
  async function handleAdd(newTaskText) {
    const created = await createTodo(newTaskText);
    setTodos([...todos, created]);
    // This next line is super advanced - it creates a Class!
    // How we do know, look on the next line, we create an object of that class there!
    const TodoItem = Parse.Object.extend("TodoItem");
    const newItem = new TodoItem();

    newItem.set("text", newTaskText);
    newItem.set("done", false);

    newItem.save().then(onSuccessfulSave).catch(onError);

    function onSuccessfulSave(savedItem) {
      alert("saved a todo with id: " + savedItem.id);
    }

    function onError(error) {
      alert(error.message);
    }
  }

  async function handleDelete(idToDelete) {
    await deleteTodo(idToDelete);
    setTodos(todos.filter((each) => each.id != idToDelete));
  }

  async function handleToggle(id) {
    const todo = todos.find((t) => t.id === id);
    await setTodoDone(id, !todo.done);
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  useEffect(() => {
    async function load() {
      setTodos(await fetchTodos());
    }
    load();
  }, []);

  return (
    <>
      <h1 style={h1Style}>To Do List for {firstName}</h1>
      {todos.length === 0 ? (
        <>Nothing to do</>
      ) : (
        <ul>
          {todos.map((elem, index) => (
            <ToDoItem
              key={elem.id}
              elem={elem}
              onDelete={handleDelete}
              onChange={handleToggle}
            />
          ))}
        </ul>
      )}

      <NewTodoForm onAdd={handleAdd} />
    </>
  );
}
