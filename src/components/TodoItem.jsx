import useTodos from "../hooks/use-todos";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

export default function TodoItem({ todo }) {
  const { toggleCompleteTodo, deleteTodo } = useTodos();

  return (
    <>
      <ListItem
        disablePadding
        secondaryAction={
          <IconButton
            color="error"
            edge="end"
            aria-label="delete"
            onClick={() => deleteTodo(todo.id)}
          >
            <CloseRoundedIcon />
          </IconButton>
        }
      >
        <ListItemButton onClick={() => toggleCompleteTodo(todo.id)}>
          <ListItemIcon>
            {todo.completed ? (
              <TaskAltRoundedIcon color="success" />
            ) : (
              <CircleOutlinedIcon color="info" />
            )}
          </ListItemIcon>
          <ListItemText
            sx={{
              color: todo.completed ? "gray" : "black",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}
