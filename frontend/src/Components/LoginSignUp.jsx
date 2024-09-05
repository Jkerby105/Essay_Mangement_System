import React from "react";

import logo from '../assets/writenext-high-resolution-logo-black-transparent.png';
import bannerImage from '../assets/aaron-burden-CKlHKtCJZKk-unsplash.jpg'
import './LoginSignup.css';


export const LoginSignUp = () => {
  return (
    <main class="container">
      <div class="nav-img">
        <img
          src={logo}
          alt="logo for WriteNext"
        />
      </div>
      <form action="">
        <div class="container-block">
          <section class="container-input">
            <div class="group">
              <header class="container-header">
                <h1>Login In</h1>
              </header>
              <div class="group-input">
                <label for="name"> User Name </label>
                <input type="text" name="name" required />
                <label for="email"> Email </label>
                <input type="email" name="email" required />
                <label for="password"> Password </label>
                <input type="text" name="password" minlength="10" required />
                <label for="confirmPassword"> Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  minlength="10"
                  required
                />
              </div>
            </div>

            <div class="container-button">
              <div>
                <button class="button-87">Login In</button>
              </div>
              <div class="option hr-lines">OR</div>

              <div>
                <button class="button-87">Create Account</button>
              </div>
            </div>
          </section>

          <section class="container-img">
            <img
              class="img"
              src={bannerImage}
              alt="Picture of someone starting to write"
            />
            <div class="img-text">
              The Best is Yet to Be Written. Keep Writing.
            </div>
          </section>
        </div>
      </form>
    </main>
  );
};
