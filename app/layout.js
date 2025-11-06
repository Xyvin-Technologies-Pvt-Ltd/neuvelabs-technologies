import { Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig, generateMetadata as generateSiteMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = generateSiteMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Neuve Labs Technology",
              url: siteConfig.url,
              logo: `${siteConfig.url}/images/logo.png`,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "AE",
                addressRegion: "UAE",
              },
              sameAs: [
                siteConfig.links.twitter,
                siteConfig.links.linkedin,
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                areaServed: "AE",
                availableLanguage: ["en", "ar"],
              },
            }),
          }}
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
