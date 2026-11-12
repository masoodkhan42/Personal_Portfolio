
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Muhammad Masood | Backend Developer",
  description:
    "Portfolio of Muhammad Masood, a Backend Developer specializing in Python, Django, Django REST Framework and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}

