import { createTheme } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#05192d",
    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
});
