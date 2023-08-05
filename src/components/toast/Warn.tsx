import { WarnIcon } from "../icons/Warn";

export const WarnToast = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={`toast`}>
      <div className="alert alert-warning">
        <WarnIcon />
        <span>{children}</span>
      </div>
    </div>
  );
};
