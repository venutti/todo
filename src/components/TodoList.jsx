import useTodos from "../hooks/use-todos";
import TodoItem from "./TodoItem";
import { AnimatePresence, Reorder } from "framer-motion";

export default function TodoList() {
  const { getFilterTodos } = useTodos();
  const todos = getFilterTodos();

  return (
    <Reorder.Group dragListener={false} values={todos}>
      <AnimatePresence>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} animationKey={todo.id} />;
        })}
      </AnimatePresence>
    </Reorder.Group>
  );
}
