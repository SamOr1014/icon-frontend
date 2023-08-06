import Image from "next/image";
import iconWhite from "../../../../public/Iconio-logos_white.png";
import { NavButtons } from "./NavButtons";
export const NavBar = () => {
  return (
    <nav className="grid grid-cols-5 md:px-8 px-3 w-full h-[80px] border-b dark:border-slate-300/10">
      <div className="flex items-center">
        <Image
          src={iconWhite}
          alt="Icon.io"
          className="aspect-square md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
        />
        <div className="text-3xl">Icon.io</div>
      </div>
      <NavButtons />
    </nav>
  );
};
