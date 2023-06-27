import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";

function SideNav() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { authToken, setAuthToken } = context;
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300 max-lg:w-20`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-dark-purple bg-white
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div className="flex gap-x-4 items-center">
          <img
            src="https://www.pinclipart.com/picdir/big/165-1656617_peer-mentors-icon-clipart.png"
            alt=""
            className="w-12 h-12"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 max-lg:hidden ${
              !open && "scale-0"
            }`}
          >
            MENTOR APP
          </h1>
        </div>
        <ul className="pt-6">
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            mt-2  `}
            onClick={() => navigate("/")}
          >
            <i class="bi bi-house-door text-2xl"></i>

            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 max-lg:hidden`}
            >
              HOME
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            mt-2  `}
            onClick={() => navigate("/app")}
          >
            <i class="bi bi-list-check text-2xl"></i>

            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 max-lg:hidden`}
            >
              APPOINTMENTS
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            mt-2  `}
            onClick={() => navigate("/apply")}
          >
            <i class="bi bi-person-add text-2xl"></i>
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 max-lg:hidden`}
            >
              APPLY MENTOR
            </span>
          </li>

          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            mt-2  `}
            onClick={() => {
              setAuthToken("");
              localStorage.setItem("authToken", "");
              navigate("/login");
            }}
          >
            <i class="bi bi-box-arrow-in-left text-2xl"></i>
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 max-lg:hidden`}
            >
              LOGOUT
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
