import NoteContext from "./NoteContext";
import { useState, useEffect } from "react";
const NoteState = (props) => {
  const state = {
    name: "wedding",
    venue: "hayat",
  };
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [userData, setUserData] = useState();
  async function apiCall() {
    console.log(authToken);
    const res = await fetch(`http://localhost:8080/api/users/current`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        authorization: `Bearer ${authToken}`,
      },
    });
    const resData = await res.json();
    console.log("resDATA is ", resData);
    setUserData(resData);
  }
  useEffect(() => {
    if (authToken) {
      apiCall();
    }
  }, []);
  useEffect(() => {
    if (authToken) {
      apiCall();
    }
  }, [authToken]);

  return (
    <NoteContext.Provider
      value={{ state, authToken, setAuthToken, userData, setUserData }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
