"use client";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = {
  children: React.ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ children, ...restProps }: Props) => {
  return <button {...restProps}>{children}</button>;
};
