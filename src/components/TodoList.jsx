import useTodos from "../hooks/use-todos";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";

export default function TodoList() {
  const { getFilterTodos } = useTodos();
  const todos = getFilterTodos();

  return (
    <List disablePadding>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} animationKey={todo.id} />;
      })}
    </List>
  );
}
