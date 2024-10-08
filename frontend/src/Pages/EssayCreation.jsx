import React from "react";
import EssayEditor from "../Components/EssayEditor";
import { getAuthToken } from "../util/auth";
import { getUserID } from "../util/auth";
import { redirect } from "react-router-dom";

export const EssayCreation = () => {
  return (
    <>
      <EssayEditor />
    </>
  );
};

export async function action({ request, params }) {
  const data = await request.formData();

  const userID = getUserID();
  const token = getAuthToken();

  const essayInfo = {
    draft: data.get("essayValue"),
    essayTitle: data.get("title"),
    userID,
  };

  console.log(essayInfo);
  console.log(token);

  const response = fetch("http://localhost:3000/essay/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': "Bearer " + token,
    },
    body: JSON.stringify(essayInfo),
  });

  if (!response.ok) {
    throw new Error("could not submit essay")
  }

  return redirect('/');
}
