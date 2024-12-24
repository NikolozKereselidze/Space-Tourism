import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
