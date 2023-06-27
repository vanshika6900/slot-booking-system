import React, { useState, useContext } from "react";
import SideNav from "../Components/SideNav";
import PersonalDets from "../Components/PersonalDets";
import ProfessionalDets from "../Components/ProfessionalDets";
import { useNavigate, useParams } from "react-router-dom";
import NoteContext from "../context/NoteContext";

function ApplyMentor() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    website: "",
    number: "",
    specialization: "",
    experience: "",
    fees: "",
    startTime: "",
    endTime: "",
  });
  const context = useContext(NoteContext);
  const { userData } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/api/users/${userData?.id}`, {
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
  };
  return (
    <div className="flex">
      <SideNav />
      <div className="h-screen flex-1 p-7 overflow-y-scroll">
        <form
          class="row g-3 needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold text-dark-purple text-center">
            BECOME A MENTOR
          </h1>
          <h3 className="text-2xl font-bold text-dark-purple">
            Personal Details
          </h3>
          <PersonalDets formData={formData} setFormData={setFormData} />
          <h3 className="text-2xl font-bold text-dark-purple">
            Professional Details
          </h3>
          <ProfessionalDets formData={formData} setFormData={setFormData} />
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input border-dark-purple border-2"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary bg-dark-purple" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyMentor;
