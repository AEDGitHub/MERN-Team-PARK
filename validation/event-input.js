const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateEventInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.date = validText(data.date) ? data.date : "";
  data.location = validText(data.location) ? data.location : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.date)) {
    errors.description = "Date field is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.category = "Location field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
