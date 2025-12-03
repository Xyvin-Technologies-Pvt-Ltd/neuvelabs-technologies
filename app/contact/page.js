import { generateMetadata } from "@/lib/metadata";
import ContactPageClient from "./ContactPageClient";

export const metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Neuve Labs. We are ready to help you accelerate your digital transformation journey.",
});

export default function Contact() {
  return <ContactPageClient />;
}
