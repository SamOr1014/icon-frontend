import "./globals.css";

export const metadata = {
  title: "Icon-IO",
  description: "AI generation community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body className="min-h-screen max-h-screen">{children}</body>
    </html>
  );
}
