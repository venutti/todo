import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
const TodoContext = createContext();

const initialTodos = [
  {
    text: "primero",
    completed: false,
    id: uuid(),
  },
  {
    text: "segundo",
    completed: true,
    id: uuid(),
  },
  {
    text: "tercero",
    completed: false,
    id: uuid(),
  },
];

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [todoView, setTodoView] = useState("all");

  const viewList = {
    all: (todos) => todos,
    completed: (todos) => todos.filter((todo) => todo.completed),
    uncompleted: (todos) => todos.filter((todo) => !todo.completed),
  };

  const createTodo = (todo) => {
    const newTodo = { text: todo, completed: false, id: uuid() };
    setTodos([newTodo, ...todos]);
  };

  const toggleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getFilterTodos = () => {
    return viewList[todoView](todos);
  };

  const isActualView = (view) => {
    return view === todoView;
  };

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoContext.Provider
      value={{
        remainingTodos,
        createTodo,
        toggleCompleteTodo,
        clearCompletedTodos,
        deleteTodo,
        getFilterTodos,
        isActualView,
        setTodoView,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
