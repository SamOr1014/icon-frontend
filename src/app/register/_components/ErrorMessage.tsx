import { FormErrorMessage } from "@/utils/formError";
import { FieldError } from "react-hook-form";

export const ErrorMessage = ({ errors }: { errors?: FieldError }) => {
  console.log("error msg", errors);
  return (
    errors?.type && (
      <label className="label">
        <span className="label-text-alt text-red-500">
          {FormErrorMessage(errors)}
        </span>
      </label>
    )
  );
};
