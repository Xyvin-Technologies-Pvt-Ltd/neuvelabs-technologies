import { Manrope, Orbitron, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import "./globals.css";
import { siteConfig, generateMetadata as generateSiteMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = generateSiteMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
});

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${manrope.variable} ${orbitron.variable} ${jetbrainsMono.variable} dark`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme-storage');
                  if (stored) {
                    const parsed = JSON.parse(stored);
                    if (parsed.state?.theme) {
                      document.documentElement.setAttribute('data-theme', parsed.state.theme);
                      document.documentElement.classList.add(parsed.state.theme);
                      return;
                    }
                  }
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
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
      <body className={`${manrope.variable} font-sans antialiased bg-background text-foreground`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
