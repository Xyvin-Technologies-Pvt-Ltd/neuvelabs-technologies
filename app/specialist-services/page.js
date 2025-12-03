import { generateMetadata } from "@/lib/metadata";
import SpecialistServicesClient from "./SpecialistServicesClient";

export const metadata = generateMetadata({
  title: "Specialist Services",
  description:
    "Specialized IT consulting services including AI automation, digital transformation consulting, and custom technology solutions for enterprises.",
});

export default function SpecialistServices() {
  return <SpecialistServicesClient />;
}
