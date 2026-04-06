import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { AiDemo } from "@/components/ai-demo";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Referrals } from "@/components/referrals";
import { GroupsVision } from "@/components/groups-vision";
import { Roadmap } from "@/components/roadmap";
import { WaitlistCta } from "@/components/waitlist-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AiDemo />
        <HowItWorks />
        <Pricing />
        <Referrals />
        <GroupsVision />
        <Roadmap />
        <WaitlistCta />
      </main>
      <Footer />
    </>
  );
}
