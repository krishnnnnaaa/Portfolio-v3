'use client'
import localFont from "next/font/local";
import "./globals.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/components/Pointer";
import { StatusProvider } from "@/features/appState";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const karla = localFont({
  src: "./fonts/Karla-VariableFont_wght.woff",
  variable: "--font-karla",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const ref = useRef(null);
      const { x, y } = useFollowPointer(ref);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${karla.variable} antialiased font-karla`}  suppressHydrationWarning={true}
      >
        <StatusProvider>
      <motion.div ref={ref} className="z-10 pointer-events-none h-8 w-8 rounded-full fixed bg-fuchsia-600" style={{ x, y }} />;
        {children}
        </StatusProvider>
        <Footer/>
      </body>

    </html>
  );
}
