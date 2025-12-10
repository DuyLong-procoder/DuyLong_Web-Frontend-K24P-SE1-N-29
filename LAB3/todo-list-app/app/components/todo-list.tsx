"use client";

import { Todo } from "./types";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
        >
          {/* Toggle checkbox */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="h-4 w-4"
          />

          {/* Text */}
          <span
            className={
              "flex-1 text-sm " +
              (todo.completed
                ? "line-through text-slate-400"
                : "text-slate-800")
            }
          >
            {todo.text}
          </span>

          {/* Remove button */}
          <button
            onClick={() => onRemove(todo.id)}
            className="text-slate-400 hover:text-red-500"
          >
            ✕
          </button>
        </div>
      ))}

      {todos.length === 0 && (
        <p className="text-center text-sm text-slate-400">
          No tasks found. Add something above 👆
        </p>
      )}
    </div>
  );
}
