import HomeScreen from "./screens/HomeScreen";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserScreen from "./screens/UserScreen";
import RoleScreen from "./screens/RoleScreen";
import Login from "./screens/LoginScreen";
import AddEditUser from "./screens/AddEditUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/users" element={<UserScreen />} />
        <Route path="/users/addedit" element={<AddEditUser />} />
        <Route path="/roles" element={<RoleScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
