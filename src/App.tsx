import { Container, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
