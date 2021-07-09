import React, { Component } from "react";
import { Link } from "react-router-dom";

export interface NavBarProps {}

export interface NavBarState {}

const NavBar = (props: any) => {
  const state = {
    menu: [
      { name: "Home", isActive: true, path: "/" },
      { name: "Login", isActive: false, path: "/login" },
    ],
  };

  const NavBarItem = (item: any) => {
    return (
      <Link
        key={item.name}
        to={item.path}
        className={"nav-link " + (item.isActive ? "active" : "")}
      >
        {item.name}
      </Link>
    );
  };

  const NavBarClass = () => {
    return "navbar navbar-expand-lg navbar-dark bg-transparent";
  };

  return (
    <header>
      <nav className={NavBarClass()}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {state.menu.map((item) => {
                return <li className="nav-item">{NavBarItem(item)}</li>;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
