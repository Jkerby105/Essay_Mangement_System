import React from "react";
import { Link, Form } from "react-router-dom";
import logo from "../assets/writenext-high-resolution-logo-black-transparent.png";
import bannerImage from "../assets/aaron-burden-CKlHKtCJZKk-unsplash.jpg";
import classes from "./LoginSignup.module.css";

export const LoginSignUp = () => {
  return (
    <main className={classes.container}>
      <div className={classes["nav-img"]}>
        <img src={logo} alt="logo for WriteNext" />
      </div>
      <div className={classes["container-block"]}>
        <section className={classes["container-input"]}>
          <Form method="post">
            <div className={classes.group}>
              <header className={classes["container-header"]}>
                <h1>Login In</h1>
              </header>
              <div className={classes["group-input"]}>
                <label htmlFor="email"> Email </label>
                <input type="email" name="email" required />
                <label htmlFor="password"> Password </label>
                <input type="text" name="password" minLength="10" required />
              </div>
            </div>

            <div className={classes["container-button"]}>
              <div className={classes["button-holder"]}>
                <div>
                  <button to="." className={classes["button-87"]}>
                    Login In
                  </button>
                </div>
                <div className={`${classes.option} ${classes["hr-lines"]}`}>
                  OR
                </div>
                <div>
                  <Link to="createAccount" className={classes["button-87"]}>
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </section>

        <section className={classes["container-img"]}>
          <img
            className={classes.img}
            src={bannerImage}
            alt="Picture of someone starting to write"
          />
          <div className={classes["img-text"]}>
            The Best is Yet to Be Written. Keep Writing.
          </div>
        </section>
      </div>
    </main>
  );
};
