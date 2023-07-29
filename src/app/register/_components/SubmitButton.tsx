import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disable?: boolean;
};

export const SubmitButton = ({
  children,
  isLoading,
  onClick,
  disable,
}: Props) => {
  return (
    <Button
      className={`btn btn-secondary ${disable ? "btn-disabled" : ""}`}
      type="submit"
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : children}
    </Button>
  );
};
