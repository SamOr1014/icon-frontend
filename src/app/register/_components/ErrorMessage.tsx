import { FormErrorMessage } from "@/utils/formError";
import { FieldError } from "react-hook-form";

export const ErrorMessage = ({ errors }: { errors?: FieldError }) =>
  errors?.type && (
    <label className="label">
      <span className="label-text-alt text-red-500">
        {FormErrorMessage(errors)}
      </span>
    </label>
  );
