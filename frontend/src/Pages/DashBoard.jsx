import React, { useEffect, useState } from 'react'
import { getUserID } from "../util/auth";
import { UserDashBoard } from '../Components/UserDashBoard'
import { redirect } from 'react-router-dom';

export const DashBoard = () => {

  const id = getUserID();
  const [userEssays,setUserEssays] = useState([]);


  useEffect(() => {
    async function fetchEssays() {
      try {
        const response = await fetch("http://localhost:3000/essay/allEssay/" + id);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setUserEssays(result.userEssay)
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    
      fetchEssays();
  }, []); 


  return (
        <UserDashBoard essays={userEssays}/>
  )
}

