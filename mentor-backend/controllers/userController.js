const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//desc register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User exists");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("hashed pass is ", hashPassword);
    const user = await User.create({
      email,
      password: hashPassword,
    });
    console.log(`user created ${user}`);
    if (user) {
      res.status(200).json({ email: user.email });
    } else {
      res.status(400);
      throw new Error("user data not valid");
    }

    res.json({ message: "register the user" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred here.", error });
  }
});

//desc login a user
//@route POST /api/users/register
//@access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("all fields are compulsory");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const authToken = jwt.sign(
      {
        user: {
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN
      // { expiresIn: "15m" }
    );
    res.status(200).json({ authToken });
  } else {
    res.status(401);
    throw new Error("user or password is incorrect");
  }
});

//desc current user info
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

// get the details of user
const getUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;

    // Assuming you have a User model or database schema
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user details
    res.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// put api to update mentee to mentor

const putContact = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id is ", id);
    const user = await User.findByIdAndUpdate(id, {
      typeofUser: "mentor",
      ...req.body,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if user is already a mentor
    if (user.typeofUser === "mentor") {
      return res.status(400).json({ message: "User is already a mentor" });
    }

    res.json({ message: "User updated to mentor successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error here" });
    res.json("error is ", error);
  }
});

module.exports = { registerUser, loginUser, currentUser, putContact, getUser };
