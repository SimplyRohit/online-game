import type { Metadata } from "next";
import "./globals.css";
import Sound from "../components/Sound";
import Footbar from "@/components/Footbar";
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
      <body className={`antialiased`}>
        <Sound />

        {children}
        <Footbar />
      </body>
    </html>
  );
}
