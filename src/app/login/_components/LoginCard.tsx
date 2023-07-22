import { HomeButton } from "./HomeButton";
import { LoginForm } from "./LoginForm";

export const LoginCard = () => {
  return (
    <div className="flex flex-col gap-10 min-w-[350px] md:min-w-[500px] min-h-[500px] p-5 rounded-lg shadow-lg shadow-white">
      <div className="grid grid-cols-6 gap-4">
        <div></div>
        <div className="text-center text-2xl col-start-2 col-end-6">
          <span className="align-middle font-bold">Login</span>
        </div>
        <HomeButton />
      </div>
      <LoginForm />
    </div>
  );
};
54;
