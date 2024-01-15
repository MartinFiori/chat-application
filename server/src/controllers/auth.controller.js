const { compareHash, createHash } = require("../utils/hash");
const {
  successMessage,
  errorMessage,
} = require("../utils/resMessages/resMessages.js");

// const users = [{ email: "mnf@jphlions.com", password: "Sucu123!" }];
const users = [];

function register(req, res) {
  const { email, password } = req.body;
  const user_found = users.find((user) => user.email === email);
  if (user_found)
    return res.send(
      errorMessage("Email is already taken! Please choose another"),
    );
  users.push({
    email,
    password: createHash(password),
  });
  res.send(successMessage("User registered successfully"));
}

module.exports = { register };
