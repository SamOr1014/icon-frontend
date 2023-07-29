"use client";

import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithRef,
  forwardRef,
  useState,
} from "react";

type Props = {
  error?: string;
  handleShowPassword: () => void;
  showPassword: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  PropsWithRef<any>;

const DEFAULT_ERROR_MESSAGE = "Please enter valid value";

const PasswordInput = forwardRef(({ error, ...restProps }: Props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <label className="label">
        <span className=" label-text">Password: </span>
      </label>
      <div className="relative">
        <input
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
            {error ?? DEFAULT_ERROR_MESSAGE}
          </span>
        </label>
      ) : (
        <></>
      )}
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
