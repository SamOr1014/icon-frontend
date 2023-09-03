import React from "react";
import { Metadata } from "next";
import { Menu } from "./_components/Menu";
import { Content } from "./_components/Content";

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
        <Content>{children}</Content>
      </main>
    </section>
  );
}
