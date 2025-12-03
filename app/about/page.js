import { generateMetadata } from "@/lib/metadata";
import AboutPageClient from "./AboutPageClient";

export const metadata = generateMetadata({
  title: "About Us",
  description:
    "Learn about Neuve Labs, our mission, vision, and the team driving digital transformation in the UAE and beyond.",
});

export default function About() {
  return <AboutPageClient />;
}
