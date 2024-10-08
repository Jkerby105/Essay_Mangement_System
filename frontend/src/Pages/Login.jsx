import React, { useState } from 'react'
import { LoginSignUp } from '../Components/LoginSignup'
import { redirect } from 'react-router-dom'
import { useContext } from 'react'
import { EssayContext } from '../../store/EssayMangeMent-Context'

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

  const responseData = await response.json();

  console.log(responseData); 

  if(!response.ok){
    throw new Error("unsuccessful login attempt")
  }

  localStorage.setItem('token', responseData.token);
  localStorage.setItem('userId',responseData.userId);

  return redirect('/dashBoard');
}