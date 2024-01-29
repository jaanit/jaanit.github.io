import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/navBar";
import Media from "@/components/media";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflow: "hidden" }}>
        <div
          className="flex  no-scrollbar  h-screen items-center  bg-cover bg-center flex-col xs:overflow-y-auto overflow-y-auto "
          style={{ backgroundImage: 'url("/ass.jpeg")' }}
        >
          <NavBar />
          <Media/>
          {children}
        </div>
      </body>
    </html>
  );
}
