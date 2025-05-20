import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type TodoContextType = {
  items: Todo[];
  addItem: (text: string) => void;
  removeItem: (id: string) => void;
};

const TodoContext = createContext<TodoContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addItem = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeItem = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContextType = {
    items: todos,
    addItem,
    removeItem,
  };

  return (
    <TodoContext.Provider value={contextValue} >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
