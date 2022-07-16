import React from "react";
import "./Header.scss";
import searchIcon from "../../assets/icons/Search.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__info">
          <h1 className="header__name">Jaeger Resto</h1>
          <span className="header__date">Tuesday, 2 Feb 2021</span>
        </div>
        <div className="header__search">
          <img src={searchIcon} alt="search" />
          <input
            className="header__input"
            type="text"
            placeholder="Search for food, coffe, etc.."
          />
        </div>
      </header>
    </>
  );
}
