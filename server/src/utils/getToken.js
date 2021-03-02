const jwt = require("jsonwebtoken");
exports.getJWT = async (payload) => {
  return await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};
