import { Metadata } from "next";
import "./globals.css";
import { Signika } from "@next/font/google";

export const metadata: Metadata = {
  title: "Icon.io",
};

const Font = Signika({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-signika",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="night"
      className=" bg-gradient-to-b from-base-300 to-base-100 flex-center"
    >
      <body className={`${Font.variable} font-sans overflow-auto w-full`}>
        {children}
      </body>
    </html>
  );
}
