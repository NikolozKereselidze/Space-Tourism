import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="destinations" element={<Destinations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
