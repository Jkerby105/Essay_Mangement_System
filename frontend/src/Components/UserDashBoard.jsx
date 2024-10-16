import React from "react";
import classes from "./UserDashBoard.module.css";
import { Link, NavLink } from "react-router-dom";

export const UserDashBoard = ({ essays }) => {
  let userEssays = [];
  userEssays = essays;
  console.log(essays);

  return (
    <div className={classes.container}>
      <main className={classes["dashboard-container"]}>
        <div className={classes.folder}>
          <div className={classes["folder-top"]}></div>

          <div className={classes["group-folder"]}>
            {userEssays.map((essay) => (
              <NavLink  key={essay._id} to="/dashBoard/essayCreation/?creation=false">
                <i  className={`fa-solid fa-folder ${classes["fa-folder"]}`}></i>
              </NavLink>
            ))}

            <NavLink to="/dashBoard/essayCreation/?creation=true">
              <i
                className={`fa-solid fa-folder-plus ${classes["fa-folder-plus"]}`}
              ></i>
            </NavLink>
          </div>
        </div>
      </main>
    </div>
  );
};
