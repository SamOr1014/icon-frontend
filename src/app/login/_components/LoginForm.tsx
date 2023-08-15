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
import Link from "next/link";
import { ErrorMessage } from "@/app/register/_components/ErrorMessage";

type LoginForm = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { fetcher: login } = useLogin();
  const [loginStatus, setLoginStatus] = useState<"error" | "badReq" | null>(
    null
  );
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    return setLoginStatus(null);
  }, [loginStatus]);

  const handleFormSubmit: SubmitHandler<LoginForm> = async (data) => {
    console.log("submit");
    const { email, password } = data;
    try {
      const res = await login(email, password);
      if (res.data.success) {
        console.log("cookie", res.request);
        router.push("/dashboard");
        return;
      }
      setLoginStatus("badReq");
      return;
    } catch (err) {
      console.log("error", err);
      setLoginStatus("error");
      return;
    }
  };
  const Toast = useCallback(() => {
    switch (loginStatus) {
      case "error":
        return <ErrorToast>Login Errored</ErrorToast>;
      case "badReq":
        return <WarnToast>Login Failed</WarnToast>;
      default:
        return <></>;
    }
  }, [loginStatus]);

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-1 flex-col gap-20 py-10"
    >
      {loginStatus !== null && <Toast />}
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
              onChange: () => clearErrors(),
            })}
          />
          <ErrorMessage errors={errors.email} />
        </div>
        <div>
          <PasswordInput
            error={errors.password?.type && FormErrorMessage(errors.password)}
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 8,
              onChange: () => clearErrors(),
            })}
          />
        </div>
        <span>
          Doesn't have a account?{" "}
          <Link href={"/register"} className="text-secondary">
            Register
          </Link>
        </span>
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
