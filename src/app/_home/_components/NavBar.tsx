import Image from "next/image";
import iconWhite from "../../../../public/Iconio-logos_white.png";
import { NavButtons } from "./NavButtons";
export const NavBar = () => {
  return (
    <nav className="md:px-8 px-3 h-[80px] border-b dark:border-slate-300/20 w-full flex-center">
      <div className="max-w-[1600px] grid grid-cols-5 w-full">
        <div className="flex items-center select-none">
          <Image
            src={iconWhite}
            alt="Icon.io"
            className="aspect-square md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
          />
          <div className="text-3xl">Icon.io</div>
        </div>
        <NavButtons />
      </div>
    </nav>
  );
};
