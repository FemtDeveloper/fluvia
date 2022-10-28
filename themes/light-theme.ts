import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#ccc",
    },
    secondary: {
      main: green[500],
    },
  },
});
