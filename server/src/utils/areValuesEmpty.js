function areValuesEmpty(arrOfValues) {
  return ![...arrOfValues].every(Boolean);
}

module.exports = { areValuesEmpty };
