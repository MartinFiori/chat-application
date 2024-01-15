require("dotenv").config();
const bcrypt = require("bcrypt");
const { HASH: SALT_ROUNDS } = require("../../config/config.js");

async function compareHash(pwd, db_pwd) {
  return bcrypt.compareSync(pwd, db_pwd);
}

function createHash(pwd) {
  return bcrypt.hashSync(pwd, bcrypt.genSaltSync(parseInt(SALT_ROUNDS)));
}

module.exports = { compareHash, createHash };
