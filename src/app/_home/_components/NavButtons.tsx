import { Button } from "@/components/Button";
import { GithubIcon } from "@/components/icons/Github";
import { DropdownButton } from "./DropdownButton";
import Link from "next/link";

export const NavButtons = () => {
  return (
    <div className="col-span-4 flex items-center flex-row-reverse gap-4">
      <DropdownButton />
      <Link href="/register">
        <Button className="btn btn-ghost md:block hidden">Join Us</Button>
      </Link>
      <Link href="/login">
        <Button className="btn btn-ghost md:block hidden">Login</Button>
      </Link>
      <Link
        target="_blank"
        href="https://github.com/SamOr1014/icon-frontend"
        className="p-3 text-slate-400 hover:text-slate-500 md:block hidden"
      >
        <GithubIcon className="w-6 h-6 " />
      </Link>
    </div>
  );
};
