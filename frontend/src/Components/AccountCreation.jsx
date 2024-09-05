import React from "react";
import logoImage from '../assets/writenext-high-resolution-logo-black-transparent.png';
import bannerImage from '../assets/jan-kahanek-fVUl6kzIvLg-unsplash.jpg';
import './AccountCreation.css'

export const AccountCreation = () => {
  return (
    <main class="container">
      <div class="nav-img">
        <img
          src={logoImage}
          alt="logo for WriteNext"
        />
      </div>
      <form action="">
        <div class="container-block">
          <section class="container-img">
            <img
              class="img"
              src={bannerImage}
              alt="Picture of someone starting to write"
            />
            <div class="img-text">
              Every Great Story Starts Here. Start Writing.
            </div>
          </section>

          <section class="container-input">
            <div class="group">
              <header class="container-header">
                <h1>Create Account</h1>
              </header>
              <div class="group-input">
                <label for="email"> Email </label>
                <input type="email" name="email" required />
                <label for="username"> Username </label>
                <input type="text" name="username" required />
                <label for="password"> Password </label>
                <input type="text" name="password" maxlength="10" required />
                <label for="confirmPassword"> Confirm Password </label>
                <input
                  type="text"
                  name="confirmPassword"
                  maxlength="10"
                  required
                />
              </div>
            </div>
            <div class="container-button">
              <div>
                <button class="button-87">Create Account</button>
              </div>
              <div class="option hr-lines">OR</div>

              <div>
                <button class="button-87">Login</button>
              </div>
            </div>
          </section>
        </div>
      </form>
    </main>
  );
};
