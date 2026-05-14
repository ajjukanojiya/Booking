import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Gaadi Ride",
  description: "Travel anywhere together. Spend smarter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstarp.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/accessibility-controls.css" />
        <link rel="stylesheet" href="/css/material-symbols-outlined.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
      </head>
      <body>
        <Header />
        
        {/* Main Content Area */}
        <main>
          {children}
        </main>

        <Footer />

        {/* Load JS Files */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.easy-ticker.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.js" strategy="afterInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
