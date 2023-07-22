"use client";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithRef,
  forwardRef,
} from "react";

type Props = {
  error?: string;
  label?: string;
  //type the colour for tailwind styling
  inputBgColour?: `#${string}` | `${string}-${string}`;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  PropsWithRef<any>;

const DEFAULT_ERROR_MESSAGE = "Please enter valid value";

export const Input = forwardRef(
  ({ error, label, inputBgColour, ...restProps }: Props, ref) => (
    <div>
      <label className="label">{label}</label>
      <div>
        <input
          ref={ref}
          {...restProps}
          className={`w-full input input-bordered ${
            inputBgColour ? `bg-[${inputBgColour}]` : "bg-gray-700"
          }`}
        />
      </div>
      {error ? (
        <label>
          <span className="label-text-alt text-red-500">
            {error ?? DEFAULT_ERROR_MESSAGE}
          </span>
        </label>
      ) : (
        <></>
      )}
    </div>
  )
);

Input.displayName = "Input";
