import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import { RoutesPath } from "./utils/navigationConst";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={RoutesPath.Home} element={<Home />} />
          <Route path={RoutesPath.Maps} element={<Maps />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;