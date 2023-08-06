"use client";

import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormErrorMessage } from "../../../utils/formError";
import { Button } from "@/components/Button";
import PasswordInput from "../../../components/PasswordInput";
import FormInput from "@/components/FormInput";
import { useCallback, useEffect, useState } from "react";
import { WarnToast } from "@/components/toast/Warn";
import { ErrorToast } from "@/components/toast/Error";

type LoginForm = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { fetcher: login } = useLogin();
  const [LoginStatus, setLoginStatus] = useState<"error" | "badReq" | null>(
    null
  );
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

  useEffect(() => {
    setTimeout(() => setLoginStatus(null), 1500);
  }, [LoginStatus]);

  const handleFormSubmit: SubmitHandler<LoginForm> = async (data) => {
    const { email, password } = data;
    try {
      const res = await login(email, password);
      if (res.data.success) {
        router.push("/");
        return;
      }
      setLoginStatus("badReq");
      return;
    } catch (err) {
      setLoginStatus("error");
      return;
    }
  };
  const Toast = useCallback(() => {
    switch (LoginStatus) {
      case "error":
        return <ErrorToast>Login Errored</ErrorToast>;
      case "badReq":
        return <WarnToast>Login Failed</WarnToast>;
      default:
        return <></>;
    }
  }, [LoginStatus]);

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-1 flex-col gap-20 py-10"
    >
      {LoginStatus !== null && <Toast />}
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
              {FormErrorMessage(errors.email)}
            </label>
          )}
        </div>
        <PasswordInput
          error={errors.password?.type && FormErrorMessage(errors.password)}
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />
      </div>
      <Button
        className="btn btn-primary hover:primary-focus text-primary-content text-lg"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
