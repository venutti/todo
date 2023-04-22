import { useState } from "react";
import useTodos from "../hooks/use-todos";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function TodoTextInput() {
  const [todo, setTodo] = useState("");
  const { createTodo } = useTodos();

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = () => {
    if (todo === "") return;
    createTodo(todo);
    setTodo("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <Box
      component="form"
      sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}
      onSubmit={handleFormSubmit}
    >
      <IconButton size="small" onClick={handleSubmit}>
        <ChevronRightIcon />
      </IconButton>
      <FormControl fullWidth>
        <Input
          variant="standard"
          color="info"
          value={todo}
          onChange={handleInputChange}
          placeholder="¿Qué necesitás hacer?"
        />
      </FormControl>
    </Box>
  );
}
