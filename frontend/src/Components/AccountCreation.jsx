import React from "react";
import logoImage from "../assets/writenext-high-resolution-logo-black-transparent.png";
import bannerImage from "../assets/jan-kahanek-fVUl6kzIvLg-unsplash.jpg";
import { Link, Form, useSubmit } from "react-router-dom";
import classes from "./AccountCreation.module.css";
import { useRef, useState } from "react";
import { accountCreation } from "../util/accountCreationCheck";


export const AccountCreation = () => {
  let userName = useRef();
  let email = useRef();
  let password = useRef();
  let confirmPassword = useRef();
  const [passwordResult, setPasswordResult] = useState(true);

  const submit = useSubmit()

  function formSubmit(e){
    e.preventDefault();

   
    let result = accountCreation(password.current.value,confirmPassword.current.value);
     setPasswordResult(result); 

     if (result) {
      const formData = new FormData();
      formData.append("userName", userName.current.value);
      formData.append("email", email.current.value);
      formData.append("password", password.current.value);
      formData.append("confirmPassword", confirmPassword.current.value);

      submit(formData, { method: "post" });
    }
      
  }

  return (
    <main className={classes.container}>
      <div className={classes["nav-img"]}>
        <img src={logoImage} alt="logo for WriteNext" />
      </div>
      <div className={classes["container-block"]}>
        <section className={classes["container-img"]}>
          <img
            className={classes.img}
            src={bannerImage}
            alt="Picture of someone starting to write"
          />
          <div className={classes["img-text"]}>
            Every Great Story Starts Here. Start Writing.
          </div>
        </section>

        <section className={classes["container-input"]}>
          <Form onSubmit={formSubmit}>
            <div className={classes.group}>
              <header className={classes["container-header"]}>
                <h1>Create Account</h1>
              </header>
              <div className={classes["group-input"]}>
                <label htmlFor="email"> Email </label>
                <input type="email" name="email" required ref={email} />
                <label htmlFor="username" > Username </label>
                <input type="text" name="username" required ref={userName} />
                <label htmlFor="password" className={passwordResult? '' : classes.error }> Password </label>
                <input
                  type="text"
                  name="password"
                  minLength="10"
                  required
                  ref={password}
                />
                <label htmlFor="confirmPassword" className={passwordResult? '' : classes.error }> Confirm Password </label>
                <input
                  type="text"
                  name="confirmPassword"
                  minLength="10"
                  required
                  ref={confirmPassword}
                />
              </div>
            </div>
            <div className={classes["container-button"]}>
              <div className={classes["button-holder"]}>
                <div>
                  <button to="." className={classes["button-87"]}>
                    Create Account
                  </button>
                </div>
                <div className={`${classes.option} ${classes["hr-lines"]}`}>
                  OR
                </div>

                <div>
                  <Link to="/" className={classes["button-87"]}>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </section>
      </div>
    </main>
  );
};
