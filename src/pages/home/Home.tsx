import React from "react";
import "./Home.scss";

// Components
import Main from "../../components/main/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import FoodNav from "../../components/food-nav/FoodNav";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <Main>
          <Header />
          <FoodNav />
          <Outlet />
        </Main>
        <Sidebar>Sidebar</Sidebar>
      </div>
    </>
  );
}
