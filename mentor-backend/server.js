const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

connectDb();
app.use(express.json());
app.use(cors());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/mentors", require("./routes/mentorRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
