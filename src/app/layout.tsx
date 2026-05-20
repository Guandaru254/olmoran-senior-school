import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://olmoranhighschool.sc.ke"),
  
  // Standard SEO
  title: { 
    default: "Olmoran Senior School | In Pursuit of Excellence", 
    template: "%s | Olmoran Senior School" 
  },
  description: "Established 2003. Shaping the next generation of disciplined, skilled, and principled leaders in Laikipia County, Kenya. Discover our CBC pathways, academic resources, and milestones.",
  keywords: [
    "Olmoran Senior School", 
    "Olmoran High School", 
    "Olmoran Day Secondary School", 
    "Schools in Laikipia County", 
    "Laikipia Secondary Schools", 
    "Best schools in Kinamba", 
    "Kenya CBC Senior School", 
    "Ol Moran sub-location education"
  ],
  authors: [{ name: "Olmoran Senior School Admin" }],
  creator: "Brave Technologies",
  publisher: "Olmoran Senior School",
  
  alternates: {
    canonical: "https://olmoranhighschool.sc.ke",
  },

  // Open Graph — Optimised explicitly for WhatsApp Mobile layout rendering
  openGraph: {
    type: "website",
    url: "https://olmoranhighschool.sc.ke",
    title: "Olmoran Senior School", // Shortened slightly to prevent mobile clipping truncation
    description: "In Pursuit of Excellence — Serving 600+ learners across dual CBC pathways in Laikipia County since 2003.",
    siteName: "Olmoran Senior School",
    locale: "en_KE",
    images: [
      {
        url: "/icon.png", // Explicit fallback string matching your public logo asset
        width: 512,
        height: 512,
        alt: "Olmoran Senior School Logo",
      }
    ],
  },

  // Twitter/X Preview
  twitter: {
    card: "summary",
    title: "Olmoran Senior School",
    description: "Shaping disciplined, skilled, and principled leaders under the CBC framework in Kenya.",
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Source+Sans+3:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              var t=localStorage.getItem('theme');
              if(t==='light'||!t) {
                document.documentElement.classList.remove('dark');
              } else if(t==='dark') {
                document.documentElement.classList.add('dark');
              }
            })();`,
          }}
        />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}