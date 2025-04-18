import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"; // relative path
import Script from "next/script"; // Import Script for Google Analytics
import Head from "next/head"; // Import Head for adding Google Analytics
import { ThemeProvider } from "../context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sinha Afroz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-KSNNC1QPP9`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KSNNC1QPP9');
            `,
          }}
        />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
