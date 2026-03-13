import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Oyugi Mourice Odhiambo | Software Engineer",
  description:
    "Software Engineer specializing in building exceptional digital experiences. Inspired by minimalism and functional design.",
  keywords: [
    "software engineer",
    "web developer",
    "frontend developer",
    "portfolio",
    "Oyugi Mourice",
  ],
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased text-[var(--text-color)] bg-[var(--bg-color)]`}>
        <div className="flex flex-col lg:flex-row min-h-screen relative overflow-x-hidden">
          <Header />
          <main className="flex-1 w-full lg:ml-0 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
