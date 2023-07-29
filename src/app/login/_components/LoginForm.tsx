"use client";

import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormErrorMessage } from "../../../utils/formError";
import { Button } from "@/components/Button";
import PasswordInput from "../../../components/PasswordInput";
import FormInput from "@/components/FormInput";

type LoginForm = {
  email: string;
  password: string;
};

const LoginForm = () => {
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

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-20"
    >
      <div className="flex flex-col gap-5">
        <div>
          <label className="label">
            <span className="label-text">Email: </span>
          </label>
          <FormInput
            label="Email: "
            placeholder="Email"
            {...register("email", {
              required: true,
              // eslint-disable-next-line no-useless-escape
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type && (
            <label className="label-text-alt bg-red-500">
              {FormErrorMessage(errors.email.type)}
            </label>
          )}
        </div>
        <PasswordInput
          error={
            errors.password?.type && FormErrorMessage(errors.password.type)
          }
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />
      </div>
      <Button className="btn btn-primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
