const { errorMessage } = require("../utils/resMessages/resMessages");
const jwt = require("jsonwebtoken");
const { JWT } = require("../config/config.js");

function isAuth(req, res, next) {
  const authorization =
    req.headers["authorization"] || req.headers["Authorization"];
  if (!authorization)
    return res.status(401).send(errorMessage("Authorization token missing"));

  const [authType, token] = authorization.split(" ");
  if (authType !== "Bearer")
    return res.status(403).send(errorMessage("Wrong authorization type"));
  if (!token) return res.status(403).send(errorMessage("Missing jsonwebtoken"));
  jwt.verify(token, JWT.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json(errorMessage(err.message));
    }
    req.user = { ...decoded, token };
    next();
  });
}

module.exports = { isAuth };
