import TodoTextInput from "./TodoTextInput";
import TodoSwitcher from "./TodoSwitcher";
import TodoList from "./TodoList";
import Footer from "./Footer";

import Paper from "@mui/material/Paper";

export default function MainSection() {
  return (
    <>
      <Paper sx={{ maxWidth: "sm", mx: "auto" }}>
        <TodoTextInput />
      </Paper>
      <Paper sx={{ maxWidth: "sm", mx: "auto", mt: 2 }}>
        <TodoSwitcher />
        <TodoList />
        <Footer />
      </Paper>
    </>
  );
}
