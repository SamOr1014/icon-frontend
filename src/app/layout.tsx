import "./globals.css";
import { Signika } from "@next/font/google";

export const metadata = {
  title: "Icon-IO",
  description: "AI generation community",
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
    <html lang="en" data-theme="night">
      <body
        className={`${Font.variable} font-sans bg-gradient-to-b from-base-300 to-base-100`}
      >
        {children}
      </body>
    </html>
  );
}
