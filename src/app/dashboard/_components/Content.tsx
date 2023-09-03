"use client";
import { useEffect } from "react";
import { DashboardHeader } from "./Header";
import { apiClients } from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

export const Content = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const checkLogin = async () => {
    const { data, status } = await apiClients.get("auth");
    if (status === 401) {
      router.push("/login");
      return;
    }
    //TODO: Set to global state later
    console.log("check who login", data);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="drawer-content">
      {/* dashboard header */}
      <nav className="h-[80px] backdrop-blur-md border-b dark:border-slate-300/20 flex items-center p-4">
        <DashboardHeader />
      </nav>
      {/* here is the dashboard content */}
      <div className="w-full overflow-scroll p-10">{children}</div>
    </div>
  );
};
