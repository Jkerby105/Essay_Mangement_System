import React from "react";

import logo from '../assets/writenext-high-resolution-logo-black-transparent.png';
import bannerImage from '../assets/aaron-burden-CKlHKtCJZKk-unsplash.jpg'
// import './LoginSignup.css';


export const LoginSignUp = () => {
  return (
    <main className="container">
      <div className="nav-img">
        <img
          src={logo}
          alt="logo for WriteNext"
        />
      </div>
        <div className="container-block">
          <section className="container-input">
            <form action="">
            <div className="group">
              <header className="container-header">
                <h1>Login In</h1>
              </header>
              <div className="group-input">
                <label htmlFor="name"> User Name </label>
                <input type="text" name="name" required />
                <label htmlFor="email"> Email </label>
                <input type="email" name="email" required />
                <label htmlFor="password"> Password </label>
                <input type="text" name="password" minlength="10" required />
                <label htmlFor="confirmPassword"> Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  minlength="10"
                  required
                />
              </div>
            </div>

            <div className="container-button">
              <div className="button-holder">
              <div>
                <button className="button-87">Login In</button>
              </div>
              <div className="option hr-lines">OR</div>
              <div>
                <button className="button-87">Create Account</button>
              </div>
              </div>

            </div>
            </form>
          </section>

          <section className="container-img">
            <img
              className="img"
              src={bannerImage}
              alt="Picture of someone starting to write"
            />
            <div className="img-text">
              The Best is Yet to Be Written. Keep Writing.
            </div>
          </section>
        </div>
    </main>
  );
};
