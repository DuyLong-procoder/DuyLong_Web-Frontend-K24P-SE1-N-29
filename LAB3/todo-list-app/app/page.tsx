"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import TodoList from "./components/todo-list";

import { Todo } from "./components/types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn TypeScript", completed: false },
    { id: 3, text: "Learn Next.js", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const isEmpty = newTask.trim().length === 0;
  const remainingCount = todos.filter((t) => !t.completed).length;

  // Thêm todo
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

  // toggle
  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // remove
  const handleRemove = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // clear completed
  const handleClearCompleted = () =>
    setTodos((prev) => prev.filter((t) => !t.completed));

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-xl font-semibold text-slate-900">
          Todo List (LAB 3)
        </h1>

        {/* Input + Button */}
        <div className="mb-4 flex gap-2">
          <Input
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
            className="flex-1"
          />

          <Button
            onClick={handleAddTodo}
            disabled={isEmpty}
            className={
              isEmpty
                ? "w-10 h-10 rounded-full bg-white text-slate-300 border border-slate-200 cursor-not-allowed"
                : "w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600"
            }
          >
            +
          </Button>
        </div>

        {/* Todo List Component */}
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
          <span>{remainingCount} tasks remaining</span>

          <Button
            variant="outline"
            size="sm"
            onClick={handleClearCompleted}
            className="border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            Clear completed
          </Button>
        </div>
      </div>
    </main>
  );
}

