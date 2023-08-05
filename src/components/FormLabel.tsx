type Props = {
  children: React.ReactNode;
};

export const FormLabel = ({ children }: Props) => {
  return (
    <label className="label">
      <span className="label-text">{children}</span>
    </label>
  );
};
