"use client";

import { EarthIcon } from "@/components/icons/Earth";
import { EditIcon } from "@/components/icons/Edit";
import HomeIcon from "@/components/icons/Home";
import { Strokes } from "@/components/icons/Strokes";
import { UserIcon } from "@/components/icons/User";
import Link from "next/link";

const closeDropdown = () => {
  document
    .querySelector("#dashboard-header-dropdown")
    ?.attributes.removeNamedItem("open");
};

export const MenuDropdown = () => {
  return (
    <details
      className="dropdown dropdown-start md:hidden"
      id="dashboard-header-dropdown"
    >
      <summary tabIndex={0} className="btn btn-square btn-ghost lg:hidden">
        <Strokes />
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-300"
      >
        <li>
          <Link href={"/dashboard/home"} onClick={closeDropdown}>
            <span>
              <HomeIcon className="w-5 h-5" />
            </span>
            <span className="align-bottom">Home</span>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/create"} onClick={closeDropdown}>
            <span>
              <EditIcon className="w-5 h-5" />
            </span>
            <span>Create</span>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/explore"} onClick={closeDropdown}>
            <span>
              <EarthIcon className="w-5 h-5" />
            </span>
            <span>Explore</span>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/profile"} onClick={closeDropdown}>
            <span>
              <UserIcon className="w-5 h-5" />
            </span>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </details>
  );
};
