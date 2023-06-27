const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
  putContact,
  getUser,
} = require("../controllers/userController");
const tokenHandler = require("../middleware/tokenHandler");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", tokenHandler, currentUser);
router.put("/:id", putContact);
router.get("/:id", getUser);

module.exports = router;
