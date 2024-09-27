import React from 'react'
import { AccountCreation } from '../Components/AccountCreation'
import { redirect } from 'react-router-dom'

export const CreateAccount = () => {
  return (
      <AccountCreation/>
  )
}


export async function action({request,params}){
  const data = await request.formData();

  const userAccount = {
    userName: data.get('userName'),
    email: data.get('email'),
    password: data.get('password'),
    confirmPassword: data.get('confirmPassword')
  }

  let response = await fetch('http://localhost:3000/auth/create',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userAccount)
  });

    if(!response.ok){
      throw new Error("unsuccessful login attempt")
    }

  return redirect('/');
}