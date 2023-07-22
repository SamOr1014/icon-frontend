type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return (
    <div className="container grid place-items-center h-screen">{children}</div>
  );
};

export default LoginLayout;
