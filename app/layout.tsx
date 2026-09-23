import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arkadiusz Sitek - Research Scientist",
  description: "Arkadiusz Sitek, research scientist and physicist at Massachusetts General Hospital and Harvard Medical School. Healthcare AI, patient health timelines, and medical imaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navigation />
        <main id="main-content" className="site-container site-main">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

