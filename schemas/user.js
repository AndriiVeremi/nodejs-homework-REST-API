const Joi = require("joi");
const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const subscripVersion = ["starter", "pro", "business"];

const registerSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().validate(...subscripVersion),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().validate(...subscripVersion),
});

module.exports = {
  registerSchema,
  loginSchema,
};

