'use client'
import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/components/Pointer";
import { StatusProvider, useStatus } from "@/features/appState";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import LyricPopover from "@/components/LyricPopover";

const karla = localFont({
  src: "./fonts/Karla-VariableFont_wght.woff",
  variable: "--font-karla",
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
      useEffect(() => {
        document.title = 'Portfolio • Krishna Gupta'
      }, [])
  return (
    <html lang="en">
       <Head>
        <title>Krishna</title>
        <meta name="description" content="This is my Portfolio." />
        <meta name="author" content="Krishna Gupta" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="This is the description of your page." />
      </Head>
      <body
        className={`${karla.variable} antialiased font-karla`}  suppressHydrationWarning={true}
      >
        <StatusProvider>
      <motion.div ref={ref} className="z-10 pointer-events-none h-8 w-8 rounded-full fixed bg-fuchsia-600" style={{ x, y }} />;
        {children}
        </StatusProvider>
        <Footer/>
        <Toaster  />
      </body>

    </html>
  );
}
