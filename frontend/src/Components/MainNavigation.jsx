import React from "react";
import logoImage from "../assets/writenext-high-resolution-logo-white-transparent.png";

export const MainNavigation = () => {
  return (
    <nav class="nav">
      <div class="nav-img">
        <img src={logoImage} alt="logo for WriteNext" />
      </div>
      <div class="nav-link">
        <div>Profile</div>
        <div>Import</div>
        <div>Logout</div>
      </div>
    </nav>
  );
};
