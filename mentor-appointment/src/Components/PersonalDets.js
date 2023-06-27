import React from "react";

function PersonalDets({ formData, setFormData }) {
  return (
    <>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          First name
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            <i class="bi bi-person"></i>
          </span>

          <input
            type="text"
            class="form-control border-dark-purple border-2"
            placeholder="First name"
            id="validationCustom01"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.currentTarget.value });
            }}
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">
          Last name
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            <i class="bi bi-person"></i>
          </span>

          <input
            type="text"
            class="form-control border-dark-purple border-2"
            id="validationCustom02"
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.currentTarget.value });
            }}
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">
          Email
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            @
          </span>
          <input
            type="text"
            class="form-control border-dark-purple border-2"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.currentTarget.value });
            }}
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          Address
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            <i class="bi bi-geo-alt"></i>
          </span>

          <input
            type="text"
            class="form-control border-dark-purple border-2"
            id="validationCustom01"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.currentTarget.value });
            }}
            required
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          Website
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            <i class="bi bi-globe2"></i>
          </span>

          <input
            type="text"
            class="form-control border-dark-purple border-2"
            id="validationCustom01"
            placeholder="Website"
            value={formData.website}
            onChange={(e) => {
              setFormData({ ...formData, website: e.currentTarget.value });
            }}
            required
          />
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom05" class="form-label">
          Phone Number
        </label>
        <div class="input-group has-validation">
          <span
            class="input-group-text border-dark-purple border-2 bg-dark-purple text-white"
            id="inputGroupPrepend"
          >
            <i class="bi bi-telephone"></i>
          </span>

          <input
            type="text"
            class="form-control border-dark-purple border-2"
            id="validationCustom05"
            placeholder="Phone number"
            value={formData.number}
            onChange={(e) => {
              setFormData({ ...formData, number: e.currentTarget.value });
            }}
            required
          />
        </div>
        <div class="invalid-feedback">Please provide a valid zip.</div>
      </div>
    </>
  );
}

export default PersonalDets;
