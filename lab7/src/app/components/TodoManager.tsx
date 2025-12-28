"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TodoManager() {
  const [todos, setTodos] = useState<any[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get("/api/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const res = await axios.post("/api/todos", { text: newTodo });
    setTodos([...todos, res.data]);
    setNewTodo("");
  };

  const updateTodo = async (id: number) => {
    if (!editText.trim()) return;
    await axios.put(`/api/todos/${id}`, { text: editText });
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: editText } : t)));
    setEditingId(null);
    setEditText("");
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`/api/todos/${id}`);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Manage Todos</h2>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {editingId === t.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => updateTodo(t.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {t.text}{" "}
                <button
                  onClick={() => {
                    setEditingId(t.id);
                    setEditText(t.text);
                  }}
                >
                  Edit
                </button>
              </>
            )}
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}