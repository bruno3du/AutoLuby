import { GlobalStyle } from "./globalStyle";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
