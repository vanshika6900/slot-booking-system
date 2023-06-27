const Mentor = require("../models/userModel");

// GET /api/mentors - Get all mentors
const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find({ typeofUser: "mentor" });
    res.status(200).json(mentors);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching mentors." });
  }
};

// GET /api/mentors/:id - Get a specific mentor by ID
const getMentorById = async (req, res) => {
  const { id } = req.params;
  try {
    const mentor = await Mentor.findById(id);
    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found." });
    }
    res.status(200).json(mentor);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the mentor." });
  }
};

// POST /api/mentors - Create a new mentor
const createMentor = async (req, res) => {
  const { name, availability } = req.body;
  try {
    const mentor = await Mentor.create({ name, availability });
    res.status(201).json(mentor);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the mentor." });
  }
};

// PUT /api/mentors/:id - Update a specific mentor by ID
const updateMentorById = async (req, res) => {
  const { id } = req.params;
  const { name, availability } = req.body;
  try {
    const mentor = await Mentor.findByIdAndUpdate(
      id,
      { name, availability },
      { new: true }
    );
    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found." });
    }
    res.status(200).json(mentor);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the mentor." });
  }
};

// DELETE /api/mentors/:id - Delete a specific mentor by ID
const deleteMentorById = async (req, res) => {
  const { id } = req.params;
  try {
    const mentor = await Mentor.findByIdAndDelete(id);
    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found." });
    }
    res.status(200).json({ message: "Mentor deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the mentor." });
  }
};

module.exports = {
  getAllMentors,
  getMentorById,
  createMentor,
  updateMentorById,
  deleteMentorById,
};
