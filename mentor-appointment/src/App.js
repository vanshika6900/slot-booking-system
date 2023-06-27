import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Appointments from "./Pages/Appointments";
import ApplyMentor from "./Pages/ApplyMentor";
import Booking from "./Pages/Booking";
import LoginUser from "./Pages/LoginUser";
import RegisterUser from "./Pages/RegisterUser";
import NoteState from "./context/NoteState";
import { useEffect, useState } from "react";

function App() {
  // const auth = localStorage.getItem("authToken");
  // const [redirected, setRedirected] = useState(true);

  // useEffect(() => {
  //   if (!auth && redirected) {
  //     setRedirected(false);
  //     window.location.href = "/login";
  //   }
  // }, [auth, redirected]);
  return (
    <NoteState>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/app" element={<Appointments />} />
            <Route path="/apply" element={<ApplyMentor />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/register" element={<RegisterUser />} />
          </Routes>
        </Router>
      </div>
    </NoteState>
  );
}

export default App;
