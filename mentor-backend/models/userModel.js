const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "enter the email"],
      unique: [true, "email already taken"],
    },
    password: {
      type: String,
      required: [true, "enter the password"],
    },
    typeofUser: {
      type: String,
      // required: [true, "enter your type"],
      default: "mentee",
      enum: ["mentor", "mentee"],
    },
    firstName: {
      type: String,
      // required: [true, "enter your name"],
    },
    lastName: {
      type: String,
      // required: [true, "enter your last name"],
    },
    address: {
      type: String,
      // required: [true, "enter your address"],
    },
    website: {
      type: String,
      // required: [true, "enter your website"],
    },
    number: {
      type: String,
      // required: [true, "enter your specialization"],
    },
    specialization: {
      type: String,
      // required: [true, "enter your specialization"],
    },
    experience: {
      type: String,
      // required: [true, "enter your experience"],
    },
    fees: {
      type: Number,
      // required: [true, "enter your fees"],
    },
    startTime: {
      type: Date,
      // required: [true, "enter your start time"],
    },
    endTime: {
      type: Date,
      // required: [true, "enter your end time"],
    },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
