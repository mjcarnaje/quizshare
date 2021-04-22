import { IError } from "../../../types/types";
import { SignUpInput } from "./userInputs";

export const validateSignUp = (
  userInputs: SignUpInput
): { errors: IError; valid: boolean } => {
  const { username, email, password, confirmPassword, birthday } = userInputs;

  let errors: IError = {};

  const emailRegex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

  if (username.length <= 3) {
    errors.username = "Email must be greater than 3 characters";
  }

  if (!email.match(emailRegex)) {
    errors.email = "Email must be a valid email address";
  }

  if (username.length <= 3) {
    errors.username = "Username must be greater than 3 characters";
  }

  if (password.length <= 3) {
    errors.password = "Password must be greater than 3 characters";
  }

  if (password !== confirmPassword) {
    errors.password = "Passwords must match";
    errors.confirmPassword = "Passwords must match";
  }

  if (!birthday) {
    errors.birthday = "Birthday is required";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
