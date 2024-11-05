import React, { useState } from "react";
import classes from "./forgetPassword.module.css";
import logoImage from "../../assets/writenext-high-resolution-logo-black-transparent.png";
import { useSubmit, redirect} from "react-router-dom";


 export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const submit = useSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const formData = new FormData();
    formData.append("email", email);
    submit(formData,{method: "POST"})

  };

  return (
    <div className={classes.forgotPassContainer}>
        <img src={logoImage} alt="App logo" />
      <h2>Forgot Password</h2>
      <form className={classes.forgotPassForm} onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};


export async function action({request,params}){
    console.log("essay here");

    const data = await request.formData();

    const userAccount = {
      email: data.get('email'),
    }

    console.log(userAccount)
  
    // let response = await fetch('http://localhost:3000/auth/create',{
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userAccount)
    // });
  
    //   if(!response.ok){
    //     throw new Error("unsuccessful login attempt")
    //   }
  
      return redirect('/');

}


