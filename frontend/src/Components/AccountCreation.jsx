import React from "react";
import logoImage from "../assets/writenext-high-resolution-logo-black-transparent.png";
import bannerImage from "../assets/jan-kahanek-fVUl6kzIvLg-unsplash.jpg";
import { Link } from "react-router-dom";
import classes from "./AccountCreation.module.css";

export const AccountCreation = () => {
  return (
    <main className={classes.container}>
      <div className={classes['nav-img']}>
        <img src={logoImage} alt="logo for WriteNext" />
      </div>
      <div className={classes['container-block']}>
        <section className={classes['container-img']}>
          <img
            className={classes.img}
            src={bannerImage}
            alt="Picture of someone starting to write"
          />
          <div className={classes['img-text']}>
            Every Great Story Starts Here. Start Writing.
          </div>
        </section>

        <section className={classes['container-input']}>
          <form action="">
            <div className={classes.group}>
              <header className={classes['container-header']}>
                <h1>Create Account</h1>
              </header>
              <div className={classes['group-input']}>
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
            <div className={classes['container-button']}>
            <div className={classes['button-holder']}>
              <div>
                <Link to="." className={classes['button-87']}>Create Account</Link>
              </div>
              <div className={`${classes.option} ${classes['hr-lines']}`}>OR</div>

              <div>
                <Link to="/" className={classes['button-87']}>Login</Link>
              </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};
