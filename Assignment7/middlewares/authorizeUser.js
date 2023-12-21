const authorizeUser = (req, res, next) => {
  // Check if the authenticated user is the one making the request
  // This can be adapted to check for a specific user attribute as required
  if (req.user && req.user.id === req.params.userId) {
    next(); // User is authorized, proceed to the next middleware or route handler
  } else {
    // User is not authorized
    return res
      .status(403)
      .json({
        error: "Forbidden: User is not authorized to access this resource",
      });
  }
};

module.exports = authorizeUser;
