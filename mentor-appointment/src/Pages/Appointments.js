import React, { useState, useEffect, useContext } from "react";
import SideNav from "../Components/SideNav";
import { useNavigate, useParams } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import Swal from "sweetalert2";

function Appointments() {
  const [data, setData] = useState([]);
  const context = useContext(NoteContext);
  const { userData } = context;
  const [formData, setFormData] = useState({
    startTime: "",
    endTime: "",
  });
  const [reload, setReload] = useState(false);

  const apiCall = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/appointments/${userData.id}`
      );
      const resData = await res.json();
      setData(resData.appointment);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };
  const handleSubmit = async (e, id) => {
    const res = await fetch(`http://localhost:8080/api/appointments/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        ...formData,
        startTime: new Date(formData.startTime),
        endTime: new Date(formData.endTime),
      }),
    });
    const resData = await res.json();
    console.log(resData);
    if (resData.Success) {
      Swal.fire({
        icon: "success",
        text: "Appintment rescheduled Successfully",
      });
    }
    setReload(!reload);
  };
  const handleDelete = async (e, id) => {
    const res = await fetch(`http://localhost:8080/api/appointments/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const resData = await res.json();
    setReload(!reload);
  };

  useEffect(() => {
    apiCall();
  }, [reload]);
  return (
    <div className="flex">
      <SideNav />

      <div className="h-screen flex-1 p-7 overflow-y-scroll">
        <h1 className="text-3xl font-bold text-dark-purple text-center pb-4">
          YOUR APPOINTMENTS
        </h1>
        <table class="table table-hover table-bordered border-dark-purple">
          <thead className=" bg-dark-purple text-white">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Date & Time </th>
              <th scope="col">Mentor </th>
              <th scope="col">Reschedule </th>
              <th scope="col">Cancel </th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr>
                <td>{e._id}</td>
                <td>{e.date}</td>
                <td>{e.mentorId?.firstName} </td>
                <td>
                  <select
                    name="language"
                    id="language"
                    className="p-[7px] border-[#d2d8dd] rounded-sm"
                    onChange={(ei) => {
                      let tempDate = new Date(e.date);
                      let start = new Date(
                        `${tempDate.getFullYear()}-${
                          tempDate.getMonth() < 10
                            ? `0${tempDate.getMonth() + 1}`
                            : tempDate.getMonth() + 1
                        }-${
                          tempDate.getDate() < 10
                            ? `0${tempDate.getDate()}`
                            : tempDate.getDate()
                        }T${ei.currentTarget.value}:00:00`
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
                        }T${parseInt(ei.currentTarget.value) + 1}:00:00`
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
                  <div
                    className=" text-green-600 cursor-pointer"
                    onClick={() => handleSubmit(e, e._id)}
                  >
                    Reschedule
                  </div>
                </td>
                <td
                  className=" text-red-600 cursor-pointer"
                  onClick={() => handleDelete(e, e._id)}
                >
                  Cancel Appointment
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointments;
