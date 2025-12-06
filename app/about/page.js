import { generateMetadata } from "@/lib/metadata";
import AboutPageClient from "./AboutPageClient";

export const metadata = generateMetadata({
  title: "About Us",
  description:
    "Neuve Labs - Established in 2025 in  UAE. Bringing proven IT consulting expertise and innovative solutions to the Middle East market. Serving clients across UAE, Oman, Singapore, India, Netherlands, Belgium, and US partnerships.",
});

export default function About() {
  return <AboutPageClient />;
}
