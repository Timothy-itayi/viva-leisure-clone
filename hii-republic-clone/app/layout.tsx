
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/footer";


export const metadata: Metadata = {
  title: "hiitRepublic",
  description: "A clone of hiit republic and its studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
     
      <body
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
