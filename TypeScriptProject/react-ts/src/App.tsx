import React, { useState } from "react";
import Input from "./components/Input";
import { Todos } from "./components/types/Type";
import Message from "./components/Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addMessage = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
    setTodo("");
  };
  const deleteMessage = (id: number) => {
    setTodos(todos.filter((td) => td.id != id));
  };
  console.log(todos, todo);
  return (
    <div className="">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <Message todos={todos} deleteMessage={deleteMessage} />
    </div>
  );
};

export default App;
