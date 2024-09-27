import React from 'react'
import { LoginSignUp } from '../Components/LoginSignup'
import { redirect } from 'react-router-dom'

export const Login = () => {
  return (
    <LoginSignUp/>
  )
}

export async function action({request,params}){
  const data = await request.formData();

  const loginInfo = {
    email: data.get('email'),
    password: data.get('password'),
  }

  let response = await fetch('http://localhost:3000/auth/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInfo)
  });

  const responseData = await response.json(); // Parse the response body

  console.log(responseData); 

  if(!response.ok){
    throw new Error("unsuccessful login attempt")
  }

  localStorage.setItem('token', responseData.token);

  return redirect('/dashBoard');
}