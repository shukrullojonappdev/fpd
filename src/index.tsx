import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Discount from "./pages/discount/Discount";
import Dashboard from "./pages/dashboard/Dashboard";
import Message from "./pages/message/Message";
import Notification from "./pages/notification/Notification";
import Setting from "./pages/setting/Setting";
import LogOut from "./pages/log-out/LogOut";
import Dishes from "./components/dishes/Dishes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />}>
            <Route path=":strCategory" element={<Dishes />} />
          </Route>
          <Route path="discount" element={<Discount />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="message" element={<Message />} />
          <Route path="notification" element={<Notification />} />
          <Route path="setting" element={<Setting />} />
          <Route path="log-out" element={<LogOut />} />
        </Route>
        <Route path="login" element={<div>Hello</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
