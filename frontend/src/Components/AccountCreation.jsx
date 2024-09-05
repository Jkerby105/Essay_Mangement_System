import React from "react";
import logoImage from "../assets/writenext-high-resolution-logo-black-transparent.png";
import bannerImage from "../assets/jan-kahanek-fVUl6kzIvLg-unsplash.jpg";
import "./AccountCreation.css";

export const AccountCreation = () => {
  return (
    <main className="container">
      <div className="nav-img">
        <img src={logoImage} alt="logo for WriteNext" />
      </div>
      <div className="container-block">
        <section className="container-img">
          <img
            className="img"
            src={bannerImage}
            alt="Picture of someone starting to write"
          />
          <div className="img-text">
            Every Great Story Starts Here. Start Writing.
          </div>
        </section>

        <section className="container-input">
          <form action="">
            <div className="group">
              <header className="container-header">
                <h1>Create Account</h1>
              </header>
              <div className="group-input">
                <label htmlFor="email"> Email </label>
                <input type="email" name="email" required />
                <label htmlFor="username"> Username </label>
                <input type="text" name="username" required />
                <label htmlFor="password"> Password </label>
                <input type="text" name="password" maxLength="10" required />
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <input
                  type="text"
                  name="confirmPassword"
                  maxLength="10"
                  required
                />
              </div>
            </div>
            <div className="container-button">
            <div className="button-holder">
              <div>
                <button className="button-87">Create Account</button>
              </div>
              <div className="option hr-lines">OR</div>

              <div>
                <button className="button-87">Login</button>
              </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};
