import { Container, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div
          style={{ height: "100vh", width: "100vw", background: "#000" }}
        ></div>
        <Container></Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
