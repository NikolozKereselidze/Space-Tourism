import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Techology/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="destinations" element={<Destinations />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
