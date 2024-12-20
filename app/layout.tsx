import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Truvela",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-gradient-to-b from-lavender-primary-100 to-lavender-success-100`}
      >
        <div className=" flex mx-auto max-w-screen-lg border min-h-screen">
          <Sidebar />
          <div className="flex-1 bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
