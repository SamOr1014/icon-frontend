"use client";
import FormInput from "@/components/FormInput";
import PasswordInput from "../../../components/PasswordInput";
import { FieldError, useForm } from "react-hook-form";
import { FormErrorMessage } from "@/utils/formError";
import CheckButton from "./CheckCredentialsButton";
import { useGetRequest } from "@/hooks/useGetRequest";
import { usePostRequest } from "@/hooks/usePostRequest";
import { useRouter } from "next/navigation";
import { SubmitButton } from "./SubmitButton";
import { ErrorMessage } from "./ErrorMessage";
import { FormLabel } from "@/components/FormLabel";

const CHECK_ROUTE = "/auth/check";

type RegisterForm = {
  username: string;
  email: string;
  password: string;
};

type CheckUserResponse = {
  userExists: boolean;
};

type CreateUserResponse = {
  success: boolean;
  message: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const {
    getRequest: checkUsername,
    isLoading: isCheckUsernameLoading,
    resetData: resetCheckUsername,
    data: checkUsernameResponse,
  } = useGetRequest<CheckUserResponse>();

  const {
    getRequest: checkEmail,
    isLoading: isCheckEmailLoading,
    resetData: resetCheckEmail,
    data: checkEmailResponse,
  } = useGetRequest<CheckUserResponse>();

  const {
    postRequest: submitUserForm,
    isLoading: isFormSubmitLoading,
    error: submitFormError,
  } = usePostRequest<RegisterForm, CreateUserResponse>();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleCheckUsername = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const inputValidation = await trigger("username");
    if (!inputValidation) return;
    const username = getValues("username");
    const res = await checkUsername(CHECK_ROUTE, { params: { username } });
    if (res?.userExists) {
      setError("username", { type: "usernameExist" });
      return;
    }
  };

  const handleCheckEmail = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const inputValidation = await trigger("email");
    if (!inputValidation) return;
    const email = getValues("email");
    const res = await checkEmail(CHECK_ROUTE, { params: { email } });
    if (res?.userExists) {
      setError("email", { type: "emailExist" });
      return;
    }
  };

  const handleSubmitUserForm = async (data: RegisterForm) => {
    const res = await submitUserForm("/users", data);
    if (res?.success) {
      router.push("/login");
    } else {
      if (submitFormError) {
        setError("root", {
          type: "serverError",
        });
        return;
      }
      setError("root", {
        type: "invalidInput",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitUserForm)}
      className="flex flex-col gap-14"
    >
      <div className="flex flex-col">
        <div>
          <FormLabel>Username:</FormLabel>
          <div className="flex gap-2 items-center w-full">
            <div className="flex-1">
              <FormInput
                placeholder="Username"
                {...register("username", {
                  minLength: 8,
                  required: true,
                })}
                onChange={() => {
                  clearErrors();
                  resetCheckUsername();
                }}
              />
            </div>
            <CheckButton
              disabled={!!errors.username?.type}
              isLoading={isCheckUsernameLoading}
              status={checkUsernameResponse?.userExists ?? null}
              onClick={handleCheckUsername}
            />
          </div>
          <ErrorMessage errors={errors.username} />
        </div>
        <div>
          <FormLabel>Email: </FormLabel>
          <div className="flex w-full gap-2 items-center">
            <div className="flex-1">
              <FormInput
                label="Email: "
                error={errors.email?.type && FormErrorMessage(errors.email)}
                placeholder="Email"
                {...register("email", {
                  required: true,
                  // eslint-disable-next-line no-useless-escape
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                onChange={() => {
                  clearErrors();
                  resetCheckEmail();
                }}
              />
            </div>
            <CheckButton
              disabled={!!errors.email?.type}
              isLoading={isCheckEmailLoading}
              status={checkEmailResponse?.userExists ?? null}
              onClick={handleCheckEmail}
            />
          </div>
          <ErrorMessage errors={errors.email} />
        </div>
        <PasswordInput
          error={FormErrorMessage(errors.password)}
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
          onChange={() => clearErrors()}
        />
        <ErrorMessage errors={errors.root as FieldError} />
      </div>
      <SubmitButton
        isLoading={isFormSubmitLoading}
        disable={isFormSubmitLoading || !!errors.root}
      >
        Create User!
      </SubmitButton>
    </form>
  );
};

export default RegisterForm;
