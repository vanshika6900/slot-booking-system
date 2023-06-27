// Middleware to check if the user is authenticated as a mentor
const mentorHandler = (req, res, next) => {
  if (req.user && req.user.isMentor) {
    // User is authenticated as a mentor, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authenticated as a mentor, send an error response
    res
      .status(401)
      .json({ error: "Unauthorized access. Only mentors are allowed." });
  }
};

module.exports = mentorHandler;
