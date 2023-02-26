import { useState } from "react";
import useTodos from "../hooks/use-todos";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TodoSwitcher() {
  const [view, setView] = useState("all");
  const { setTodoView } = useTodos();

  const handleChange = (event, newValue) => {
    setView(newValue);
    setTodoView(newValue);
  };

  return (
    <Box>
      <Tabs
        value={view}
        textColor="primary"
        indicatorColor="primary"
        onChange={handleChange}
        centered
      >
        <Tab value="all" label="Todos" />
        <Tab value="completed" label="Completos" />
        <Tab value="uncompleted" label="Incompletos" />
      </Tabs>
    </Box>
  );
}
