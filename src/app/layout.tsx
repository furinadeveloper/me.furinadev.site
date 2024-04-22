import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furina\'s website",
  description: "Normal student, fullstack, bot discord developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
