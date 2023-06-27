const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const tokenHandler = asyncHandler(async (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
          res.status(401);
          throw new Error("User not Authorized");
        }
        req.user = decoded.user;
        next();
      });
      if (!token) {
        res.status(401);
        throw new Error("token missing");
      }
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});
module.exports = tokenHandler;
