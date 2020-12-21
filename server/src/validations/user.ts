import { Types } from "mongoose";
import { param, body, ValidationChain } from "express-validator";

export const createUser: ValidationChain[] = [
  body("firstName")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add a name")
    .isAlpha()
    .withMessage("Please add a valid name")
    .isLength({ max: 50 })
    .withMessage("Name must be less than 50 characters"),

  body("lastName")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add a last name")
    .isAlpha()
    .withMessage("Please add a valid last name")
    .isLength({ max: 50 })
    .withMessage("Last Name must be less than 50 characters"),

  body("email")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add an email")
    .isEmail()
    .withMessage("Please add a valid email")
    .normalizeEmail(),

  body("password")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add a password")
    .isLength({ min: 6 })
    .withMessage("Password must be min 6 characters long")
    .isAlphanumeric()
    .withMessage("Password must be alphanumeric")
    .custom((val, { req }) => val === req.body.passwordConfirmation)
    .withMessage("Passwords must match"),

  body("role")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add a role")
    .isIn(["user", "publisher"])
    .withMessage("Please add a valid role"),
];

export const updateUser: ValidationChain[] = [
  param("id")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add a user id")
    .custom((val) => Types.ObjectId.isValid(val))
    .withMessage("Please add a valid user id"),

  body("firstName")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add a name")
    .isAlpha()
    .withMessage("Please add a valid name")
    .isLength({ max: 50 })
    .withMessage("Name must be less than 50 characters"),

  body("email")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add an email")
    .isEmail()
    .withMessage("Please add a valid email")
    .normalizeEmail(),

  body("password")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add a password")
    .isLength({ min: 6 })
    .withMessage("Password must be min 6 characters long")
    .isAlphanumeric()
    .withMessage("Password must be alphanumeric")
    .custom((val, { req }) => val === req.body.passwordConfirmation)
    .withMessage("Passwords must match"),

  body("role")
    .exists()
    .notEmpty()
    .trim()
    .withMessage("Please add a role")
    .isIn(["user", "publisher"])
    .withMessage("Please add a valid role"),
];
