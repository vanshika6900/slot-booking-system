const express = require("express");
const router = express.Router();
const {
  getAllMentors,
  getMentorById,
  createMentor,
  updateMentorById,
  deleteMentorById,
} = require("../controllers/mentorController");
// const mentorHandler = require("../middleware/mentorHandler");

// router.use(mentorHandler);
router.route("/").get(getAllMentors);
router.route("/:id").get(getMentorById);
router.route("/").post(createMentor);
router.route("/:id").put(updateMentorById);
router.route("/:id").delete(deleteMentorById);

module.exports = router;
