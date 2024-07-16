import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Class Connect",
    template:"Welcome"
  },
  description: "Welcome to class connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
