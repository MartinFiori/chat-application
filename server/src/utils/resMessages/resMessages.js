module.exports = {
  errorMessage: (msg) => {
    return {
      error: true,
      description: msg,
    };
  },
  successMessage: (msg) => {
    return {
      error: false,
      description: msg,
    };
  },
};
