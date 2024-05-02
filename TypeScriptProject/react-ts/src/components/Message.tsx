import React from "react";
import { Todos } from "./types/Type";

type Props = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
};

const Message: React.FC<Props> = ({ todos, deleteMessage }) => {
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <div>
            <p key={i}>
              {todo.message}{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => deleteMessage(todo.id)}
              >
                x
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Message;
