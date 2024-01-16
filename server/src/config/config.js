const { SALT_ROUNDS, PRIVATE_KEY, MAX_AGE } = process.env;
module.exports = {
  HASH: {
    SALT_ROUNDS,
  },
  JWT: {
    PRIVATE_KEY,
    MAX_AGE,
  },
};
