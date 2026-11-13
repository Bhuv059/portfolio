import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bhuvaneswari Babu| Full-Stack Developer",
    template: "%s | Bhuvaneswari Babu",
  },
  description: "Full-stack developer building modern, responsive web applications using React, Next.js and TypeScript.",
  keywords: ["Full-Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer"],
  authors: [{ name: "Bhuvaneswari Babu" }],
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
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
