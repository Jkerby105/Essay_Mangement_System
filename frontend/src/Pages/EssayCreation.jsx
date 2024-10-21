import React, {useEffect, useState} from "react";
import EssayEditor from "../Components/EssayEditor";
import { getAuthToken } from "../util/auth";
import { getUserID } from "../util/auth";
import { redirect } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


export const EssayCreation = () => {

  let initialValue = false;
  const [searchParams] = useSearchParams();
  const [userEssay,setUserEssay] = useState(null);
  const creation = searchParams.get('creation');
  let essayValue = null;
  essayValue = searchParams.get('essay');
  if(creation === "true"){
    initialValue = true;
  }

  useEffect(() => {
    async function fetchOneEssay() {
      if(essayValue !== 'null'){

        try {
          const response = await fetch("http://localhost:3000/essay/oneEssay/" + essayValue);
          
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          setUserEssay(result.userEssay[0])
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }

    }
    
      fetchOneEssay();
  }, []); 


  return (
    <>
      <EssayEditor creation={initialValue} essayInput={userEssay} essayID={essayValue}/>
    </>
  );

};

export async function loader({ request, params }) {
  console.log("load essay...")

  // const userID = getUserID();

  return redirect('/dashBoard');

}

export async function action({ request, params }) {
  const data = await request.formData();
  const essayID = data.get("essayID");
  console.log(essayID)
  const userID = getUserID();
  const token = getAuthToken();


  const essayInfo = {
    draft: data.get("essayValue"),
    essayTitle: data.get("title"),
    userID,
    essayID
  };

  let response;
  if(data.get("update") === 'true'){
   response = await fetch("http://localhost:3000/essay/essayUpdate/" + essayID, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + token,
      },
      body: JSON.stringify(essayInfo),
    });
  }else{
    response = await fetch("http://localhost:3000/essay/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + token,
      },
      body: JSON.stringify(essayInfo),
    });
  }



  if (!response.ok) {
    throw new Error("could not submit essay")
  }

  // return redirect('/dashBoard');
}
