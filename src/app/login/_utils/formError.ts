export const FormErrorMessage = (type: string) => {
  switch (type) {
    case "required":
      return "This field is required";
    case "pattern":
      return "Invalid email";
    case "minLength":
      return "Password must be at least 8 characters";
  }
};
