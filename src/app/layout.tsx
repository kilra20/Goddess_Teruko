import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goddess Teruko",
  description: "Goddess Teruko - Personal Brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
