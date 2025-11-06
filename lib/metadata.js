export const siteConfig = {
  name: "Neuve Labs Technology",
  description: "Next-generation AI and IT consulting company helping enterprises accelerate digital transformation through Artificial Intelligence, Cloud & DevOps, Data Analytics, and Enterprise Software Development.",
  url: "https://neuvelabs.com",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/neuvelabs",
    linkedin: "https://linkedin.com/company/neuvelabs",
  },
};

export function generateMetadata({
  title,
  description,
  path = "",
  image,
}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | AI Company UAE | IT Consulting Middle East`;
  const fullDescription = description || siteConfig.description;
  const fullUrl = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "AI Company UAE",
      "IT Consulting Middle East",
      "Digital Transformation Partner",
      "Enterprise Software Development UAE",
      "AI Automation Solutions",
      "Cloud Services UAE",
      "Data Analytics Consulting",
      "AI & DevOps Partner UAE",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
      languages: {
        "en-US": fullUrl,
        "ar-AE": `${fullUrl}?lang=ar`,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: "@neuvelabs",
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
}

export function generateOrganizationSchema() {
  return {
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
  };
}

export function generateArticleSchema({ title, description, datePublished, dateModified, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image ? `${siteConfig.url}${image}` : undefined,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
  };
}

