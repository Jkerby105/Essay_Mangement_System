import React from "react";
import logoImage from "../assets/writenext-high-resolution-logo-white-transparent.png";
import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'

export const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <div className={classes["nav-img"]}>
          <img src={logoImage} alt="logo for WriteNext"></img>
        </div>
      </div>

      <input type="checkbox" id={classes.check}></input>
      <label htmlFor="check" className={classes.checkbtn}>
        <i className={`fa-solid fa-bars ${classes["fa-bars"]}`}></i>
      </label>

      <ul className={classes.a1}>
        <li>
        <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              DashBoard
            </NavLink>
        </li>
        <li>
        <NavLink
              to="/Dashboard/Profile"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Profile
            </NavLink>
        </li>
        <li>
        <NavLink
              to="/Dashboard/importEssay"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Import
            </NavLink>
        </li>
        <li>
        <NavLink
              to="/Logout"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Logout
            </NavLink>
          {/* <a href="#">Logout</a> */}
        </li>
      </ul>
    </nav>
  );
};
