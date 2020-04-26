import React from "react";
import "./css/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  var prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
  };

  const pages = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "blog",
      route: "/blog",
    },
    {
      name: "hub",
      route: "/hub",
    },
    {
      name: "events",
      route: "/events",
    },
    {
      name: "resources",
      route: "/resources",
    },
  ];
  return (
    <div className="navBar" id="navbar">
      <div className="navLogo">
        <span className="logoName">UNIPORT</span>
        <span className="logoHub">hub</span>
      </div>
      <div className="navMenu d-none d-lg-flex">
        {pages.map((page, i) => (
          <ul key={i}>
            <li
              className={
                props.page === page.name
                  ? "menuLink activeMenuLink"
                  : "menuLink"
              }
            >
              <NavLink to={`${page.route}`}>{page.name}</NavLink>
            </li>
          </ul>
        ))}
      </div>
      <div className="navMenuUserAvatar d-none d-lg-flex">
        <div className="button">Login</div>
      </div>
    </div>
  );
}
