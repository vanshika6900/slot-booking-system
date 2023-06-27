import React, { useState } from "react";
import Cards from "../Components/Cards";
import SideNav from "../Components/SideNav";

function Dashboard() {
  const [open, setOpen] = useState(true);

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
