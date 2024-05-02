import { useEffect } from "react";

type props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addMessage: () => void;
};

const Input: React.FC<props> = ({ todo, setTodo, addMessage }) => {
  useEffect(() => {
    console.log(todo); // Log after the state update
  }, [todo]); // Dependency array: log only when todo changes

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={handleInputChange}
        placeholder="Yazınız"
      />
      <button onClick={addMessage}>EKLE</button>
    </div>
  );
};

export default Input;
