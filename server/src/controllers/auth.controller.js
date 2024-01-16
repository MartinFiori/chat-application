const jwt = require("jsonwebtoken");
const { compareHash, createHash } = require("../utils/hash");
const { areValuesEmpty } = require("../utils/areValuesEmpty.js");
const {
  successMessage,
  errorMessage,
} = require("../utils/resMessages/resMessages.js");
const { JWT } = require("../config/config.js");

// const users = [{ email: "mnf@jphlions.com", password: "Sucu123!" }];
const users = [];

function register(req, res) {
  const { email, nickname, password } = req.body;
  const [trimmedEmail, trimmedNickname, trimmedPassword] = [
    email.trim(),
    nickname.trim(),
    password.trim(),
  ];
  if (areValuesEmpty([trimmedEmail, trimmedNickname, trimmedPassword])) {
    return res.status(401).send(errorMessage("Please complete all inputs"));
  }
  const user_already_exists = users.find((user) => user.email === trimmedEmail);
  if (user_already_exists)
    return res
      .status(403)
      .send(errorMessage("Email is already taken! Please choose another"));
  users.push({
    email: trimmedEmail,
    nickname: trimmedNickname,
    password: createHash(trimmedPassword),
  });
  res.send(successMessage("User registered successfully"));
}

function login(req, res) {
  const { email, nickname, password } = req.body;
  const [trimmedEmail, trimmedNickname, trimmedPassword] = [
    email.trim(),
    nickname.trim(),
    password.trim(),
  ];
  if (areValuesEmpty([trimmedEmail, trimmedNickname, trimmedPassword])) {
    return res.status(400).send(errorMessage("Please complete all inputs"));
  }
  const user_found = users.find((user) => user.email === trimmedEmail);
  if (!user_found)
    return res.status(401).send(errorMessage("Ups! Email not found"));
  if (!compareHash(trimmedPassword, user_found.password))
    return res
      .status(401)
      .send(errorMessage("Invalid password. Pleas try again"));
  const token = jwt.sign(user_found, JWT.PRIVATE_KEY, {
    expiresIn: Number(JWT.MAX_AGE),
  });
  req.headers["authorization"] = token;
  res.send({ ...successMessage("User loged correctly"), token });
}

module.exports = { register, login };
