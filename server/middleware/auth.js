const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.header("Authorization");
  // console.log("Authorization Header:", authHeader); // Log the authorization header

  if (!authHeader) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];
  // console.log("Token:", token); // Log the token

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token ID:", decoded.id); // Log the decoded token ID
    req.user = { id: decoded.id }; // Ensure req.user contains the user ID
    next();
  } catch (err) {
    console.error("Token verification error:", err); // Log any verification error
    res.status(401).json({ msg: "Token is not valid" });
  }
};
