import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Class Connect",
    template: "Welcome",
  },
  description: "Welcome to class connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Analytics />

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-MPPFLH83KV`}
        />

        <Script id="ga-script" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-MPPFLH83KV', {
      page_path: window.location.pathname,
    });
        `}
        </Script>
      </head>
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
