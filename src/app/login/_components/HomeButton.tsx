"use client";

import { useRouter } from "next/navigation";
import HomeIcon from "../_assets/HomeIcon";

export const HomeButton = () => {
  const router = useRouter();

  const redirectToHome = () => router.push("/");

  return (
    <button className="btn btn-link h-full" onClick={redirectToHome}>
      <HomeIcon />
    </button>
  );
};
