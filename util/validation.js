const isRequired = (input) => {
  if (!input) {
    return "This field is required.";
  }
  return true;
};

module.exports = { isRequired };
