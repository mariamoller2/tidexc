export default function ToDoItem({ todo }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{todo.text}</span>
      <button type="button">Delete</button>
    </li>
  );
}
