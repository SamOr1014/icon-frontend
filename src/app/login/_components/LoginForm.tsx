"use client";

import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormErrorMessage } from "../_utils/formError";
import { PasswordInput } from "./PasswordInput";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { fetcher: login } = useLogin();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit: SubmitHandler<LoginForm> = async (data) => {
    const { email, password } = data;
    const res = await login(email, password);
    res.success && router.push("/");
  };

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-10">
        <Input
          label="Email: "
          error={errors.email?.type && FormErrorMessage(errors.email.type)}
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        <PasswordInput
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
          error={
            errors.password?.type && FormErrorMessage(errors.password.type)
          }
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />
        <Button className="btn btn-primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};
