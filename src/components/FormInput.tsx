"use client";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithRef,
  forwardRef,
} from "react";

type Props = {
  //type the colour for tailwind styling
  inputBgColour?: `#${string}` | `${string}-${string}`;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  PropsWithRef<any>;

const FormInput = forwardRef(({ inputBgColour, ...restProps }: Props, ref) => {
  return (
    <input
      ref={ref}
      {...restProps}
      className={`w-full input input-bordered ${
        inputBgColour ? `bg-[${inputBgColour}]` : "bg-gray-700"
      }`}
    />
  );
});

FormInput.displayName = "FormInput";
export default FormInput;
