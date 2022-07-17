import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

// Icons
import logo from "../../assets/icons/Vector.svg";
import home from "../../assets/icons/Home.svg";
import discount from "../../assets/icons/Discount.svg";
import dashboard from "../../assets/icons/Dashboard.svg";
import message from "../../assets/icons/Message.svg";
import notification from "../../assets/icons/Notification.svg";
import setting from "../../assets/icons/Setting.svg";
import logOut from "../../assets/icons/Log Out.svg";

export default function Navigation() {
  let [position, setPosition] = React.useState(0);

  function getTargetNavItem(e: any) {
    const element: any = e.target;
    const firstElementOfNavigation: any = document.querySelector(".fi");
    const box: any = document.querySelectorAll(".navigation__box");
    const icon: any = document.querySelectorAll(".navigation__icon");
    const posfi: any = firstElementOfNavigation?.getBoundingClientRect().top;

    const pos = element.getBoundingClientRect().top;
    const minus = pos - posfi;
    setPosition((position = minus));

    for (let i = 0; i < icon.length; i++) {
      if (element === icon[i]) {
        box[i].classList.add("active");
      } else {
        box[i].classList.remove("active");
      }
    }
  }

  return (
    <>
      <div className="sidebar-nav">
        <div className="sidebar-nav__logo">
          <div className="sidebar-nav__logo-box">
            <div className="sidebar-nav__logo-icon">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="navigation">
          <div className="active-box" style={{ top: position }}>
            <div className="active-box__top-round"></div>
            <div className="active-box__inner-box">
              <div className="active-box__inner-round"></div>
            </div>
            <div className="active-box__bottom-round"></div>
          </div>
          <div className="navigation__row">
            <div className="navigation__item">
              <Link to="home">
                <div
                  className="navigation__box fi active"
                  onClick={getTargetNavItem}
                >
                  <div className="navigation__icon"></div>
                  <img src={home} alt="home" />
                </div>
              </Link>
            </div>
            <div className="navigation__item">
              <Link to="discount">
                <div className="navigation__box" onClick={getTargetNavItem}>
                  <div className="navigation__icon"></div>
                  <img src={discount} alt="discount" />
                </div>
              </Link>
            </div>
            <div className="navigation__item">
              <Link to="dashboard">
                <div className="navigation__box" onClick={getTargetNavItem}>
                  <div className="navigation__icon"></div>
                  <img src={dashboard} alt="dashboard" />
                </div>
              </Link>
            </div>
            <div className="navigation__item">
              <Link to="message">
                <div className="navigation__box" onClick={getTargetNavItem}>
                  <div className="navigation__icon"></div>
                  <img src={message} alt="message" />
                </div>
              </Link>
            </div>
            <div className="navigation__item">
              <Link to="notification">
                <div className="navigation__box" onClick={getTargetNavItem}>
                  <div className="navigation__icon"></div>
                  <img src={notification} alt="notification" />
                </div>
              </Link>
            </div>
            <div className="navigation__item">
              <Link to="setting">
                <div className="navigation__box" onClick={getTargetNavItem}>
                  <div className="navigation__icon"></div>
                  <img src={setting} alt="setting" />
                </div>
              </Link>
            </div>
          </div>
          <div className="navigation__item">
            <Link to="log-out">
              <div className="navigation__box" onClick={getTargetNavItem}>
                <div className="navigation__icon"></div>
                <img src={logOut} alt="log-out" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
