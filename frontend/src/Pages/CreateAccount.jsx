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
  console.log(data.get('userName'))

  const userAccount = {
    userName: data.get('userName'),
    email: data.get('email'),
    password: data.get('password'),
    confirmPassword: data.get('confirmPassword')
  }

  console.log(userAccount)

  let response = await fetch('http://localhost:3000/auth/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userAccount)
  });

    console.log(response)

  return redirect('/');
}