import HomeScreen from "./screens/HomeScreen";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserScreen from "./screens/UserScreen";
import RoleScreen from "./screens/RoleScreen";
import Login from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<HomeScreen />} />
        <Route path="/home/users" element={<UserScreen />} />
        <Route path="/home/roles" element={<RoleScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
