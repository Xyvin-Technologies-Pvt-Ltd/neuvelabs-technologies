import { generateMetadata } from "@/lib/metadata";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata = generateMetadata({
  title: "Industries",
  description:
    "IT consulting services for various industries including Healthcare, Finance, Retail, Manufacturing, and more. Industry-specific technology solutions.",
});

export default function Industries() {
  return <IndustriesPageClient />;
}
