const { compareHash, createHash } = require("../utils/hash");
const { areValuesEmpty } = require("../utils/areValuesEmpty.js");
const {
  successMessage,
  errorMessage,
} = require("../utils/resMessages/resMessages.js");

// const users = [{ email: "mnf@jphlions.com", password: "Sucu123!" }];
const users = [];

function register(req, res) {
  const { email, password } = req.body;
  const [trimmedEmail, trimmedPassword] = [email.trim(), password.trim()];
  if (areValuesEmpty([trimmedEmail, trimmedPassword])) {
    return res.send(errorMessage("Please complete all inputs"));
  }
  const user_found = users.find((user) => user.email === trimmedEmail);
  if (user_found)
    return res.send(
      errorMessage("Email is already taken! Please choose another"),
    );
  users.push({
    email: trimmedEmail,
    password: createHash(trimmedPassword),
  });
  res.send(successMessage("User registered successfully"));
}

function logIn(req, res) {}
module.exports = { register, logIn };
