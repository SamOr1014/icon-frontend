"use client";
import { Button } from "@/components/Button";
import { GithubIcon } from "@/components/icons/Github";
import Link from "next/link";

export const DropdownButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <Button tabIndex={0} className="btn btn-square btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
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
