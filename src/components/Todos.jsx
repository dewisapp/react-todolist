import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar props di React!"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajat State di React"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
