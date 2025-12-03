import { generateMetadata } from "@/lib/metadata";
import DigitalEngineeringClient from "./DigitalEngineeringClient";

export const metadata = generateMetadata({
  title: "Digital Engineering",
  description:
    "Comprehensive digital engineering services including AI & Machine Learning, Cloud & DevOps, Data Analytics, and Enterprise Software Development.",
});

export default function DigitalEngineering() {
  return <DigitalEngineeringClient />;
}
