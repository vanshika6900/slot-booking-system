import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const apiCall = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/mentors`);
      const resData = await res.json();
      console.log("resData is", resData);
      // if (resData.success === true) {
      setData(resData);
      // }
    } catch (error) {
      console.error("Error fetching mentors:", error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);
  console.log("data is ", data);

  return (
    <div class="flex items-center justify-center flex-wrap">
      {data.map((e) => (
        <div
          class="relative m-4 cursor-pointer mt-14"
          onClick={() => navigate(`/booking/${e._id}`)}
        >
          <div
            id="outline"
            class="bg-dark-purple absolute rounded-xl h-full w-full -left-2 -top-2 "
          ></div>

          <div
            id="content"
            class="p-8 w-72 bg-gray-100 rounded-xl shadow-lg relative space-y-3 "
          >
            <img
              src="https://crictoday.com/wp-content/uploads/2021/05/Shubman-Gill-crictoday-1-2.png"
              alt=""
              className="mb-2"
            />
            <span class="text-xl font-semibold">{e.firstName}</span>
            <div className="flex flex-row">
              <h3>Specialization</h3>
              <p class="text-gray-500 pl-4">{e.specialization}</p>
            </div>
            <div className="flex flex-row">
              <h3>Experience</h3>
              <p class="text-gray-500 pl-4">{e.experience}</p>
            </div>
            <div className="flex flex-row">
              <h3>Fees per session</h3>
              <p class="text-gray-500 pl-4">{e.fees}</p>
            </div>
            <div className="flex flex-row">
              <h3>Timing</h3>
              <p class="text-gray-500 pl-4">10:00 - 18:00</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
