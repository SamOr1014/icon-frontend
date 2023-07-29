"use client";

import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { ErrorIcon } from "@/components/icons/ErrorIcon";
import { QuestionIcon } from "@/components/icons/QuestionIcon";
import { TickIcon } from "@/components/icons/TickIcon";

type Props = {
  disabled?: boolean;
  isLoading?: boolean;
  status?: boolean | null;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const CheckButton = ({ onClick, disabled, isLoading, status }: Props) => {
  return (
    <div
      className={status === null ? "tooltip" : ""}
      data-tip={"Check if credentials are available!!"}
    >
      <Button
        disabled={disabled}
        className="btn btn-ghost btn-rounded btn-xs btn-circle h-6 w-6"
        onClick={onClick}
      >
        {isLoading ? (
          <Spinner />
        ) : status === null ? (
          <QuestionIcon />
        ) : status ? (
          <ErrorIcon />
        ) : (
          <TickIcon />
        )}
      </Button>
    </div>
  );
};

export default CheckButton;
