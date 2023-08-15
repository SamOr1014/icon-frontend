import { Button } from "@/components/Button";
import { GithubIcon } from "@/components/icons/Github";
import { Strokes } from "@/components/icons/Strokes";
import Link from "next/link";

export const DropdownButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <Button tabIndex={0} className="btn btn-square btn-ghost md:hidden">
        <Strokes />
      </Button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
      >
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="https://github.com/SamOr1014/icon-frontend">
            Github
            <GithubIcon className="w-4 h-4 " />
          </Link>
        </li>
      </ul>
    </div>
  );
};
