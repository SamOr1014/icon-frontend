import RegisterForm from "./_components/RegisterForm";
import RegisterTitle from "./_components/Title";

const RegisterPage = () => {
  return (
    <div className="min-w-[320px] md:min-w-[550px] min-h-[550px] rounded-lg relative flex justify-between">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-secondary to-accent rounded-lg blur opacity-75"></div>
      <div className="flex flex-col relative bg-base-100 rounded-lg w-full p-4">
        <RegisterTitle />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
