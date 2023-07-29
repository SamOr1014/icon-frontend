import HomeButton from "./HomeButton";

const LoginTitle = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div></div>
      <div className="text-center text-2xl col-start-2 col-end-6">
        <span className="align-middle font-bold">Login</span>
      </div>
      <HomeButton />
    </div>
  );
};

export default LoginTitle;
