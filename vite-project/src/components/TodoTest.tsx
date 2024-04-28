import { useState } from "react";

type todo = {
  id: number;
  text: string | number;
};

const TodoTest = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([]);
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const handleClick = (event: any) => {
    event.preventDefault();
    const newTodo: todo = {
      id: todos.length + 1,
      text: value.trim(),
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };
  return (
    <div className="todo">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Bir todo ekle..."
        value={value}
      />
      <button onClick={(event) => handleClick(event)}>Ekle</button>
      <ul className="todos">
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text} </li>;
        })}
      </ul>
    </div>
  );
};

export default TodoTest;
