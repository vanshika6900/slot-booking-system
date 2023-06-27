import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NoteContext from "../context/NoteContext";

function LoginUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const context = useContext(NoteContext);
  const { authToken, setAuthToken } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/api/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const resData = await res.json();

    localStorage.setItem("authToken", resData.authToken);
    setAuthToken(resData.authToken);
    Swal.fire({
      icon: "success",
      text: "Logged in Successfully",
    });
    navigate("/");
  };
  return (
    <div>
      <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">
          {/* <!-- form --> */}
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
            <p class="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>

            <form action="" class="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                class="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.currentTarget.value });
                }}
              />
              <div class="relative">
                <input
                  class="p-2 rounded-xl border w-full"
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Password0"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.currentTarget.value,
                    });
                  }}
                />
                <i
                  className={
                    passwordShown
                      ? "bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                      : "bi bi-eye-slash absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  }
                  onClick={togglePassword}
                ></i>
              </div>
              <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>

            <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button
                class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>
            </div>
          </div>

          {/* <!-- image --> */}
          <div class="md:block hidden w-1/2">
            <img
              class="rounded-2xl"
              src="https://static.vecteezy.com/system/resources/previews/016/187/786/original/abstract-background-with-basic-patterns-of-circles-rectangles-and-squares-with-a-unique-color-combination-background-design-with-colorful-geometric-patterns-in-portrait-orientation-vector.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginUser;
