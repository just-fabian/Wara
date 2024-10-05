import { Container, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div className="full-bg"></div>
        <div className="full-bg"></div>

        <Container></Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
