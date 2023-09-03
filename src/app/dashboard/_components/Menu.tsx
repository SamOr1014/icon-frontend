import Link from "next/link";
import Image from "next/image";
import iconWhite from "../../../../public/Iconio-logos_white.png";
import HomeIcon from "@/components/icons/Home";
import { EditIcon } from "@/components/icons/Edit";
import { EarthIcon } from "@/components/icons/Earth";
import { UserIcon } from "@/components/icons/User";
import { LinkedinIcon } from "@/components/icons/Linkedin";
import { GithubIcon } from "@/components/icons/Github";
import { IDIcon } from "@/components/icons/ID";

export const Menu = () => {
  return (
    <aside className="drawer-side z-40 border-r dark:border-slate-300/20">
      <div className="w-[250px] grid grid-flow-row gird-row-6 h-full">
        <div className="lg:flex w-full">
          <div className="flex-center select-none w-full">
            <Image
              src={iconWhite}
              alt="Icon.io"
              className="aspect-square w-20"
            />
            <div className="text-3xl">Icon.io</div>
          </div>
        </div>
        <ul className="menu w-full menu-lg gap-3 row-span-5">
          <li className="menu-title">Dashboard</li>
          <li>
            <Link href={"/dashboard/home"} className="flex-center">
              <HomeIcon className="w-5 h-5" />
              <span className="align-bottom">Home</span>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/explore"} className="flex-center">
              <EarthIcon className="w-5 h-5" />
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/create"} className="flex-center">
              <EditIcon className="w-5 h-5" />
              <span>Create</span>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/profile"} className="flex-center">
              <UserIcon className="w-5 h-5" />

              <span>Profile</span>
            </Link>
          </li>
        </ul>
        <footer className="footer p-5 text-base-content row-span-1 flex flex-col justify-end items-center">
          <div className="gap-5">
            <div className="w-full text-center">Greet Me</div>
            <div className="flex gap-10">
              <Link
                href={"https://www.linkedin.com/in/chamsumor/"}
                target="_blank"
                className="hover:text-slate-500"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href={"https://github.com/SamOr1014"}
                target="_blank"
                className="hover:text-slate-500"
              >
                <GithubIcon />
              </Link>
              <Link
                href={"https://samor1014.github.io/"}
                target="_blank"
                className="hover:text-slate-500"
              >
                <IDIcon />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </aside>
  );
};
