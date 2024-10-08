import { redirect } from "react-router-dom";


export function getAuthToken() {
    const token = localStorage.getItem("token");
  
    if (!token) {
      return null;
    }
  
    return token;
  }

 export function getUserID(){
  const ID = localStorage.getItem("userId");
  return ID;
 } 
  
  export function checkAuthLoader() {
    const token = getAuthToken();
  
    if (!token) {
      return redirect("/");
    }
  
    return null;
  }
  