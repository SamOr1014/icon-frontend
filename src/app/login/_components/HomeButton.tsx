import HomeIcon from "@/components/icons/Home";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link href={"/"} className="flex-center">
      <HomeIcon />
    </Link>
  );
};

export default HomeButton;
