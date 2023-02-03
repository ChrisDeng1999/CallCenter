import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<h1>This Page Doesn't Exist!</h1>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
