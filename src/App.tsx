import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { darkTheme } from "./themes/dark.theme";
import { HomeScreen } from "./screens";
import { BottomBar, TopBar } from "./components/layout";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box className="App">
        <Box component="main" className="content">
          <TopBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <BottomBar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
