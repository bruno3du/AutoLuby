import { GlobalStyle } from "./globalStyle";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeBoard from "./pages/HomeBoard";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/home' element={<HomeBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
