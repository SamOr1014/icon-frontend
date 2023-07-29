import { FieldError } from "react-hook-form";

export const FormErrorMessage = (error?: FieldError) => {
  if (!error) return "";

  switch (error.type) {
    case "required":
      return "This field is required";
    case "pattern":
      return "Invalid email";
    case "minLength":
      return "Password must be at least 8 characters";
    case "emailExist":
      return "Email already exist, try another one";
    case "usernameExist":
      return "Username already exist, try a new one";
    case "invalidInput":
      return "Invalid Information. Please change username or email";
    case "serverError":
      return "Server Error, Please try again later";
    default:
      return "Input invalid";
  }
};
