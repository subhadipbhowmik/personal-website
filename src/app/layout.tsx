import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "zO0OXZHRp2b6W2AjxYtvGn97FFaUcVkyB_I0yn3ydGc",
    yandex: "",
  },
};

// Ad Component
function SidebarAd({
  side,
  adSlot,
}: {
  side: "left" | "right";
  adSlot: string;
}) {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <div
      className={`hidden xl:block fixed top-24 ${
        side === "left" ? "left-4" : "right-4"
      } w-[240px] z-10`}
    >
      <div className="sticky top-24">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "240px", height: "600px" }}
          data-ad-client="ca-pub-4244742985577045"
          data-ad-slot={adSlot}
          data-ad-format="vertical"
          data-full-width-responsive="false"
        />
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className="notranslate"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        translate="no"
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Desktop Ad Layout */}
            <div className="relative">
              {/* Left Sidebar Ad */}
              <SidebarAd side="left" adSlot="4858588709" />

              {/* Main Content */}
              <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6 xl:px-8">
                {children}
                <Navbar />
              </div>

              {/* Right Sidebar Ad */}
              <SidebarAd side="right" adSlot="4023185039" />
            </div>
          </TooltipProvider>
        </ThemeProvider>

        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Analytics Script */}
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-918F6W2R3S"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-918F6W2R3S');
      `}
            </Script>

            {/* Google AdSense Script */}
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4244742985577045"
              strategy="afterInteractive"
              crossOrigin="anonymous"
            />
            <Script id="adsense-init" strategy="afterInteractive">
              {`
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
      `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
