const { SALT_ROUNDS, PRIVATE_KEY, EXPIRES_IN } = process.env;

module.exports = {
  HASH: {
    SALT_ROUNDS,
  },
  JWT: {
    PRIVATE_KEY,
    EXPIRES_IN,
  },
};
