import React from "react";
import { DashboardHeader } from "./_components/Header";
import { Metadata } from "next";
import { Menu } from "./_components/Menu";

export const metadata: Metadata = {
  title: "Dashboard",
};

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <section className="w-full grid place-items-center">
      <main className="h-screen drawer lg:drawer-open max-w-[1700px] w-full border border-solid border-slate-300/20">
        {/*  */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <Menu />
        <div className="drawer-content">
          {/* dashboard header */}
          <nav className="h-[80px] backdrop-blur-md border-b dark:border-slate-300/20 flex items-center p-4">
            <DashboardHeader />
          </nav>
          {/* here is the dashboard content */}
          <div className="w-full overflow-scroll p-10">{children}</div>
        </div>
      </main>
    </section>
  );
}
