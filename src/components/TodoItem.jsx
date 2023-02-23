import CheckIcon from "./icons/CheckIcon";
import CloseIcon from "./icons/CloseIcon";
import classnames from "classnames";
import useTodos from "../hooks/use-todos";
import { motion, Reorder } from "framer-motion";

export default function TodoItem({ todo }) {
  const { toggleCompleteTodo, deleteTodo } = useTodos();

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        duration: 0.4,
        type: "tween",
      }}
      className="py-1 px-2 border-b-2 flex gap-2 items-start"
    >
      <motion.div
        whileHover={{ scale: 0.96 }}
        className="grow cursor-pointer flex items-start gap-2"
        onClick={() => toggleCompleteTodo(todo.id)}
      >
        <CheckIcon visible={todo.completed} />
        <p
          className={classnames("break-all", {
            "line-through opacity-60": todo.completed,
          })}
        >
          {todo.text}
        </p>
      </motion.div>

      <div className="cursor-pointer" onClick={() => deleteTodo(todo.id)}>
        <CloseIcon />
      </div>
    </motion.li>
  );
}
