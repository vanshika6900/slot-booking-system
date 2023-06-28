import React, { useState, useContext, useEffect } from "react";
import Cards from "../Components/Cards";
import SideNav from "../Components/SideNav";
import NoteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(true);
  const context = useContext(NoteContext);
  const navigate = useNavigate();

  const { authToken, setAuthToken } = context;
  console.log("auth", authToken);
  useEffect(() => {
    if (authToken === "") {
      navigate("/login");
    }
  }, [authToken]);

  return (
    <div className="flex">
      <SideNav />
      <div className="h-screen flex-1 p-7 overflow-y-scroll">
        <h1 className="text-3xl font-bold text-dark-purple text-center pb-4">
          MENTORS AVAILABLE
        </h1>
        <Cards />
      </div>
    </div>
  );
}

export default Dashboard;
