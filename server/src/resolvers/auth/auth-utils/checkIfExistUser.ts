import { User } from "../../../entity/User";
import { IError } from "../../../types/types";
import { SignUpInput } from "./userInputs";

export const checkIfExistUser = async (
  userInputs: SignUpInput
): Promise<{ errors: IError; valid: boolean }> => {
  const { username, email } = userInputs;

  let errors: IError = {};
  const userTaken = await User.findOne({ username });
  const emailTaken = await User.findOne({ email });

  if (userTaken) {
    errors.username = "This username is already taken";
  }

  if (emailTaken) {
    errors.email = "This email is already taken";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
