let todos: { id: number; text: string }[] = [];
let nextId = 1;

export const getTodos = () => todos;

export const addTodo = (text: string) => {
  const newTodo = { id: nextId++, text };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodo = (id: number, text: string) => {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.text = text;
    return todo;
  }
  return null;
};

export const deleteTodo = (id: number) => {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};