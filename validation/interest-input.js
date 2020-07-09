const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateInterestInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.description = validText(data.description) ? data.description : "";
  data.category = validText(data.category) ? data.category : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  if (
    ![
      "Outdoors & Adventure",
      "Food & Drink",
      "Hobbies & Crafts",
      "Other",
    ].includes(data.category)
  ) {
    errors.category = "Must select valid category";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
