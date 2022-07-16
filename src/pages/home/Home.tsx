import React from "react";
import "./Home.scss";

// Components
import Main from "../../components/main/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import FoodNav from "../../components/food-nav/FoodNav";
import Dishes from "../../components/dishes/Dishes";

export default function Home() {
  return (
    <>
      <div className="home">
        <Main>
          <Header />
          <FoodNav />
          <Dishes />
        </Main>
        <Sidebar>Sidebar</Sidebar>
      </div>
    </>
  );
}
