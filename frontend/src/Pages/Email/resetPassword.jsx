import React, { useState } from "react";
import classes from "./resetPassword.module.css";
import logoImage from "../../assets/writenext-high-resolution-logo-black-transparent.png";
import { useSubmit, redirect} from "react-router-dom";


const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submit = useSubmit();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const formData = new FormData();
    formData.append("email", email);
    submit(formData,{method: "POST"})
  };

  return (
    <div className={classes.container}>
        <img src={logoImage} alt="App logo" />
      <h2>Reset Password</h2>
      <div  className={classes.forgotPassForm} onSubmit={handleSubmit}>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </div>
    </div>
  );
};

export default ResetPassword;


export async function action({request,params}){
  console.log("essay here");

  const data = await request.formData();

  const userRestPassword = {
    password: data.get('password'),
    confirmPassword: data.get('confirmPassword')
  }

  console.log(userRestPassword)

  // let response = await fetch('http://localhost:3000/auth/create',{
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(userRestPassword)
  // });

  //   if(!response.ok){
  //     throw new Error("unsuccessful login attempt")
  //   }

    return redirect('/');

}


