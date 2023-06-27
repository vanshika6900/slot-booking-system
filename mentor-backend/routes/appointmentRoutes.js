const express = require("express");
const router = express.Router();
const {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointmentById,
  deleteAppointmentById,
} = require("../controllers/appointmentController");

router.route("/").get(getAllAppointments);
router.route("/:id").get(getAppointmentById);
router.route("/").post(createAppointment);
router.route("/:id").put(updateAppointmentById);
router.route("/:id").delete(deleteAppointmentById);

module.exports = router;
