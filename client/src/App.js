import "./App.css";
import AppNavBar from "./Components/AppNavBar";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Components/pages/DashBoard";
import Home from "./Components/pages/Home";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./redux/actions/userAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAuthUser()), []);

  return (
    <div className="App">
      <AppNavBar />
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
