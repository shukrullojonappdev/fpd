import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
// Components
import Navigation from "./components/navigation/Navigation";

// Pages
import Home from "./pages/home/Home";
import Discount from "./pages/discount/Discount";
import Dashboard from "./pages/dashboard/Dashboard";
import Message from "./pages/message/Message";
import Notification from "./pages/notification/Notification";
import Setting from "./pages/setting/Setting";
import LogOut from "./pages/log-out/LogOut";

export default function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="discount" element={<Discount />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="message" element={<Message />} />
          <Route path="notification" element={<Notification />} />
          <Route path="setting" element={<Setting />} />
          <Route path="log-out" element={<LogOut />} />
        </Routes>
      </div>
    </>
  );
}
