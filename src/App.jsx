import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Zahra from "./pages/Zahra/Zahra";

function App() {
  return (
    <div className="main-div">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zahra" element={<Zahra />} />
      </Routes>
    </div>
  );
}

export default App;
