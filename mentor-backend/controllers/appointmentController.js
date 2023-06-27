const Appointment = require("../models/appointmentModel");
const User = require("../models/userModel");

// GET /api/appointments - Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();

    res.status(200).json(appointments);
    appointmentHandler();
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching appointments." });
  }
};

// GET /api/appointments/:id - Get a specific appointment by ID
const getAppointmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    let appointment;
    if (user.typeofUser === "mentor")
      appointment = await Appointment.find({ mentorId: id }).populate(
        "menteeId"
      );
    else if (user.typeofUser === "mentee") {
      appointment = await Appointment.find({ menteeId: id }).populate(
        "mentorId"
      );
    }
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found." });
    }

    res.status(200).json(appointment);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the appointment." });
  }
};

// POST /api/appointments - Create a new appointment
const createAppointment = async (req, res) => {
  console.log(req.body);
  const { mentorId, menteeId, date, startTime, endTime } = req.body;
  try {
    const appointment = await Appointment.create({
      mentorId,
      menteeId,
      date,
      startTime,
      endTime,
    });
    const isTimeSlotValid = async (mentorId, startTime, endTime, date) => {
      const mentor = await Mentor.findById(mentorId);
      if (!mentor) {
        throw new Error("Mentor not found.");
      }

      // Check if the time slot is in the future
      const currentTime = moment();
      const appointmentTime = moment(startTime);
      if (!appointmentTime.isAfter(currentTime)) {
        return false;
      }

      // Check if the mentor is available at the specified time slot
      const existingAppointment = await Appointment.findOne({
        mentorId,
        startTime,
        endTime,
        date,
      });

      return !existingAppointment;
    };
    if (isTimeSlotValid) {
      res
        .status(201)
        .json({ Success: true, appointment, message: "Appointment booked" });
    } else {
      res.json("Appointment not available");
    }
  } catch (error) {
    res.status(500).json({
      Success: false,
      error: "An error occurred while creating the appointment.",
      error,
    });
  }
};

// PUT /api/appointments/:id - Update a specific appointment by ID
const updateAppointmentById = async (req, res) => {
  const { id } = req.params;
  const { startTime, endTime } = req.body;
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      id,

      { startTime, endTime }
    );
    // if (!appointment) {
    //   return res.status(404).json({ error: "Appointment not found." });
    // }
    res.status(200).json(appointment);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the appointment." });
  }
};

// DELETE /api/appointments/:id - Delete a specific appointment by ID
const deleteAppointmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found." });
    }
    res.status(200).json({ message: "Appointment deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the appointment." });
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointmentById,
  deleteAppointmentById,
};
