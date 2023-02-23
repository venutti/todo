import { useRef, useState } from "react";
import useTodos from "../hooks/use-todos";
import ChevronIcon from "./icons/ChevronIcon";
import { motion } from "framer-motion";

export default function TodoTextInput() {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const { createTodo } = useTodos();

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleFormClick = () => {
    inputRef.current?.focus();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createTodo(todo);
    setTodo("");
  };

  return (
    <motion.form
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      className="flex gap-3 items-center border-b-2 py-2 px-4 cursor-pointer"
      onClick={handleFormClick}
      onSubmit={handleFormSubmit}
    >
      <motion.label
        animate={{ rotate: -90, x: hovering ? 3 : -2 }}
        htmlFor="todo-input"
        className="cursor-pointer"
      >
        <ChevronIcon />
      </motion.label>
      <input
        ref={inputRef}
        value={todo}
        autoComplete="off"
        onChange={handleInputChange}
        className="w-full bg-inherit outline-none placeholder:italic cursor-pointer"
        id="todo-input"
        placeholder="¿Qué necesitás hacer?"
      />
    </motion.form>
  );
}
