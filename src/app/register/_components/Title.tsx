import HomeButton from "@/app/login/_components/HomeButton";

const RegisterTitle = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div></div>
      <div className="text-center text-2xl col-start-2 col-end-6 grid place-items-center">
        <div className="font-bold">Register</div>
      </div>
      <HomeButton />
    </div>
  );
};

export default RegisterTitle;
