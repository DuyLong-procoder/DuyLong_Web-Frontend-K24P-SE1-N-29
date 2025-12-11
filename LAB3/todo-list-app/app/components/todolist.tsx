
"use client";

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "learn reactjs", completed: true },
    { id: 2, text: "learn typescript", completed: false },
    { id: 3, text: "learn zustand", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTodo = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setNewTask("");
  };

 
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

 
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="todo-wrapper">

      <div className="todo-input-row">
        <input
          className="todo-input"
          type="text"
          placeholder="Add a task here..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        />
        <button className="todo-add-btn" onClick={handleAddTodo}>
          +
        </button>
      </div>


      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <span
              className="todo-check"
              onClick={() => toggleTodo(todo.id)}
              title="Toggle complete"
            >
              {todo.completed ? "✓" : ""}
            </span>
            <span className="todo-text">{todo.text}</span>
            <button
              className="todo-remove-btn"
              onClick={() => removeTodo(todo.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="todo-footer">
        <span>{remainingCount} tasks remaining</span>
        <button className="todo-clear-btn" onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}
