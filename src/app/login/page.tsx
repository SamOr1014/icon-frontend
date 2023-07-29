import LoginForm from "./_components/LoginForm";
import LoginTitle from "./_components/Title";

export const Login = () => {
  return (
    <div className="flex flex-col gap-10 min-w-[350px] md:min-w-[500px] min-h-[500px] p-5 rounded-lg shadow-lg shadow-white">
      <LoginTitle />
      <LoginForm />
    </div>
  );
};

export default Login;
