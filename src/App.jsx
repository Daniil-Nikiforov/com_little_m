import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className="main-div">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
