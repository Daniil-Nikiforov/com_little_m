import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Zahra from "./pages/Zahra/Zahra";
import Bus from "./pages/Bus/Bus";

function App() {
  return (
    <div className="main-div">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zahra" element={<Zahra />} />
        <Route path="/business_woman" element={<Bus />} />
      </Routes>
    </div>
  );
}

export default App;
