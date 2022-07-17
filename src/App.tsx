import React from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
// Components
import Navigation from "./components/navigation/Navigation";

export default function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <Outlet />
      </div>
    </>
  );
}
