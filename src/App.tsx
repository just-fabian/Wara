import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import { RoutesPath } from "./utils/navigationConst";
import Lessons from "./pages/Lessons";
import CuriousFacts from "./pages/CuriousFacts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />

        <Routes>
          <Route path={RoutesPath.Home} element={<Home />} />
          <Route path={RoutesPath.Maps} element={<Maps />} />
          <Route path={RoutesPath.Lessons} element={<Lessons />} />
          <Route path={RoutesPath.CuriousFacts} element={<CuriousFacts />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
