import useTodos from "../hooks/use-todos";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Footer() {
  const { remainingTodos, clearCompletedTodos } = useTodos();

  const remainingText =
    remainingTodos !== 1
      ? `${remainingTodos} tareas restantes`
      : `${remainingTodos} tarea restante`;

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{ fontSize: 14, px: 2, py: 1 }}
    >
      <Typography variant="p">{remainingText}</Typography>

      <Button variant="text" size="small" onClick={clearCompletedTodos}>
        Borrar completos
      </Button>
    </Stack>
  );
}
