import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Your Name | Full-Stack Developer",
    template: "%s | Your Name",
  },
  description: "Full-stack developer building modern, responsive web applications using React, Next.js and TypeScript.",
  keywords: ["Full-Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer"],
  authors: [{ name: "BB" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
