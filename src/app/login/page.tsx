import LoginForm from "./_components/LoginForm";
import LoginTitle from "./_components/Title";

export const Login = () => {
  return (
    <div className="min-w-[350px] md:min-w-[550px] min-h-[500px] rounded-lg relative flex">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-secondary to-accent rounded-lg blur opacity-75"></div>
      <div className="relative bg-base-100 rounded-lg w-full p-4">
        <LoginTitle />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
