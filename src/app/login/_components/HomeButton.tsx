"use client";

import HomeIcon from "@/components/icons/HomeIcon";
import { useRouter } from "next/navigation";

const HomeButton = () => {
  const router = useRouter();

  const redirectToHome = () => router.push("/");

  return (
    <button className="btn btn-link h-full" onClick={redirectToHome}>
      <HomeIcon />
    </button>
  );
};

export default HomeButton;
