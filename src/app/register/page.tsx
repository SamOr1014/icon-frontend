import RegisterForm from "./_components/RegisterForm";
import RegisterTitle from "./_components/Title";

const RegisterPage = () => {
  return (
    <div className="flex flex-col gap-10 min-w-[350px] md:min-w-[500px] min-h-[600px] p-7 rounded-lg shadow-lg shadow-white">
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
