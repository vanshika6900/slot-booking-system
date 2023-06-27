import React, { useEffect, useState, useContext } from "react";
import SideNav from "../Components/SideNav";
import NoteContext from "../context/NoteContext";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

function Booking() {
  const [data, setData] = useState();
  const { id } = useParams();
  const context = useContext(NoteContext);
  const { userData } = context;
  const [formData, setFormData] = useState({
    mentorId: id,
    menteeId: userData?.id,
    date: new Date(),
    startTime: "",
    endTime: "",
  });
  const handleSubmit = async (e) => {
    const res = await fetch(`http://localhost:8080/api/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const resData = await res.json();
    setData(resData);
  };

  const apiCall = async (e) => {
    const res = await fetch(`http://localhost:8080/api/appointments`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, date: new Date(formData.date) }),
    });
    const resData = await res.json();
    console.log(resData);
    if (resData.Success) {
      Swal.fire({
        icon: "success",
        text: "Appintment booked Successfully",
      });
    }
  };
  useEffect(() => {
    handleSubmit();
    apiCall();
  }, []);

  return (
    <div className="flex">
      <SideNav />
      <div className="h-screen flex-1 p-7 overflow-y-scroll">
        <h1 className="text-3xl font-bold text-dark-purple text-center pb-2">
          BOOK YOUR MENTOR
        </h1>
        <div className="flex mt-5 max-md:flex-col">
          <img
            src="https://crictoday.com/wp-content/uploads/2021/05/Shubman-Gill-crictoday-1-2.png"
            alt=""
            className="w-3/6 max-h-screen max-md:w-full"
          />
          <div className="flex flex-col w-3/6 ml-7 max-md:w-full max-md:ml-0">
            <div></div>
            <h1 className="text-3xl font-semibold text-dark-purple pb-2">
              {data?.user?.firstName}
              {data?.user?.lastName}
            </h1>
            <div className="flex flex-row items-center">
              <h3 className=" text-dark-purple">Specialization:</h3>
              <p class="text-gray-500 pl-1">{data?.user?.specialization}</p>
              <div className="w-[5px] h-[5px] rounded-full bg-dark-purple ml-[9px] mr-[9px] mt-[2px]"></div>
              <h3 className=" text-dark-purple">Experience:</h3>
              <p class="text-gray-500 pl-1">{data?.user?.experience}</p>
            </div>

            <div className="flex flex-row items-center">
              <h3 className=" text-dark-purple">Fees per session:</h3>
              <p class="text-gray-500 pl-1">Rs. {data?.user?.fees} </p>
              <div className="w-[5px] h-[5px] rounded-full bg-dark-purple ml-[9px] mr-[9px] mt-[2px]"></div>
              <h3 className=" text-dark-purple">Timings:</h3>
              <p class="text-gray-500 pl-1">
                {data?.user?.startTime} - {data?.user?.endTime}
              </p>
            </div>
            <div className="bg-[#f3f4f6] shadow-md rounded-md mt-3">
              <h1 className="text-3xl font-semibold bg-dark-purple p-2 text-center text-white rounded-t-md">
                Book your slot
              </h1>
              <div className="p-3 space-y-7">
                <div className="flex justify-around flex-wrap">
                  <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      required
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          date: e.currentTarget.value,
                        });
                      }}
                    />
                  </div>

                  <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">
                      Time Slot
                    </label>
                    <select
                      name="language"
                      id="language"
                      className="p-[7px] border-[#d2d8dd] rounded-sm"
                      onChange={(e) => {
                        let tempDate = new Date(formData.date);
                        let start = new Date(
                          `${tempDate.getFullYear()}-${
                            tempDate.getMonth() < 10
                              ? `0${tempDate.getMonth() + 1}`
                              : tempDate.getMonth() + 1
                          }-${
                            tempDate.getDate() < 10
                              ? `0${tempDate.getDate()}`
                              : tempDate.getDate()
                          }T${e.currentTarget.value}:00:00`
                        );
                        let end = new Date(
                          `${tempDate.getFullYear()}-${
                            tempDate.getMonth() < 10
                              ? `0${tempDate.getMonth() + 1}`
                              : tempDate.getMonth() + 1
                          }-${
                            tempDate.getDate() < 10
                              ? `0${tempDate.getDate()}`
                              : tempDate.getDate()
                          }T${parseInt(e.currentTarget.value) + 1}:00:00`
                        );
                        setFormData({
                          ...formData,
                          startTime: start,
                          endTime: end,
                        });
                      }}
                    >
                      <option value={11}>11AM - 12PM</option>
                      <option value={12}>12PM - 1PM</option>
                      <option value={13}>1PM - 2PM</option>
                      <option value={14}>2PM - 3PM</option>
                      <option value={15}>3PM - 4PM</option>
                      <option value={16}>4PM - 5PM</option>
                      <option value={17}>5PM - 6PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-evenly text-center">
                  <button
                    className="flex text-center justify-center bg-dark-purple text-white font-semibold w-44 p-2 rounded-md"
                    onClick={apiCall}
                  >
                    Book Slot
                  </button>
                </div>
                {/* <div className="flex justify-center text-center">
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
