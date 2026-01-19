import { generateMetadata } from "@/lib/metadata";
import ChapterSignal from "@/components/chapters/ChapterSignal";
import ChapterChallenge from "@/components/chapters/ChapterChallenge";
import ChapterVision from "@/components/chapters/ChapterVision";
import ChapterProof from "@/components/chapters/ChapterProof";
import ChapterContact from "@/components/chapters/ChapterContact";
import ClientsLogos from "@/components/ClientsLogos";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Neuve Labs Technology - Leading AI and IT consulting company in UAE. Where extraordinary minds shape the future of technology.",
});

export default function Home() {
  return (
    <>
      {/* Chapter 1: The Signal - Hero */}
      <ChapterSignal />

      {/* Chapter 2: The Challenge - Industry Problems */}
      {/* <ChapterChallenge /> */}

      {/* Chapter 3: The Vision - Services/Solutions */}
      <ChapterVision />

      {/* Clients Carousel */}
      <ClientsLogos />

      {/* Chapter 4: Proof of Transmission - Case Studies */}
      <ChapterProof />

      {/* Chapter 5: Join the Future - Contact */}
      <ChapterContact />
    </>
  );
}
