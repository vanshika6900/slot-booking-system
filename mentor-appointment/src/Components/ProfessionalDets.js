import React from "react";

function ProfessionalDets({ formData, setFormData }) {
  return (
    <>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          Specialization
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            <i class="bi bi-journal-bookmark-fill"></i>
          </span>

          <input
            type="text"
            class="form-control border-dark-purple border-2"
            id="validationCustom01"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={(e) => {
              setFormData({
                ...formData,
                specialization: e.currentTarget.value,
              });
            }}
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          Experience
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            <i class="bi bi-star"></i>
          </span>

          <input
            type="text"
            class="form-control border-dark-purple border-2"
            id="validationCustom01"
            placeholder="Experience"
            value={formData.experience}
            onChange={(e) => {
              setFormData({
                ...formData,
                experience: e.currentTarget.value,
              });
            }}
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          Fees Per Session
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            <i class="bi bi-currency-rupee"></i>
          </span>

          <input
            type="text"
            class="form-control border-dark-purple border-2"
            id="validationCustom01"
            placeholder="Fees Per Session"
            value={formData.fees}
            onChange={(e) => {
              setFormData({
                ...formData,
                fees: e.currentTarget.value,
              });
            }}
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          Timings
        </label>
        <div className="flex flex-row">
          <div class="input-group has-validation">
            <span
              class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
              id="inputGroupPrepend"
            >
              <i class="bi bi-calendar-check"></i>
            </span>

            <input
              type="time"
              class="form-control border-dark-purple border-2"
              id="validationCustom01"
              value={formData.startTime}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  startTime: e.currentTarget.value,
                });
              }}
              required
            />
            <input
              type="time"
              class="form-control border-dark-purple border-2"
              id="validationCustom01"
              placeholder="End Time"
              value={formData.endTime}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  endTime: e.currentTarget.value,
                });
              }}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfessionalDets;
