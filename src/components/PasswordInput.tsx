"use client";

import { PropsWithRef, forwardRef, useState } from "react";
import { FormLabel } from "./FormLabel";
import FormInput from "./FormInput";
import { FieldError } from "react-hook-form";
import { FormErrorMessage } from "@/utils/formError";

type Props = {
  error?: FieldError;
} & PropsWithRef<any>;

const PasswordInput = forwardRef(({ error, ...restProps }: Props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <>
      <FormLabel>Password:</FormLabel>
      <div className="relative">
        <FormInput
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={`w-full input input-bordered bg-gray-700`}
          {...restProps}
        />
        <button
          className="bg-transparent h-full top-0 right-2 absolute px-2 border-none w-[60px]"
          type="button"
          onClick={handleShowPassword}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {error ? (
        <label className="label">
          <span className="label-text-alt text-red-500">
            {FormErrorMessage(error)}
          </span>
        </label>
      ) : (
        <></>
      )}
    </>
  );
});

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
