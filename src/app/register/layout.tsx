type Props = {
  children: React.ReactNode;
};

const RegisterLayout = ({ children }: Props) => {
  return (
    <div
      className={"container grid place-items-center h-screen overflow-x-hidden"}
    >
      {children}
    </div>
  );
};

export default RegisterLayout;
