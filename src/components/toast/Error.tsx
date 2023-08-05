import { ErrorIcon } from "../icons/Error";

export const ErrorToast = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="toast">
      <div className="alert alert-error text-lg text-center">
        <ErrorIcon />
        <span>{children}</span>
      </div>
    </div>
  );
};
