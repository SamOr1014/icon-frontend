"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();

  //dashboard page is a redirect page
  useEffect(() => {
    router.replace("/dashboard/home");
  }, []);

  return <></>;
}
