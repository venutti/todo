import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <Box sx={{ my: 3, color: "error.main" }}>
      <Typography align="center" variant="h2">
        lista de tareas
      </Typography>
    </Box>
  );
}
