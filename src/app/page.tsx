import BestAudioGear from "@/components/BestAudioGear";
import Hero from "@/components/home/Hero";
import ShopSection from "@/components/home/ShopSection";
import YX1Earphones from "@/components/home/YX1Earphones";
import ZX7SpeakerStore from "@/components/home/ZX7SpeakerStore";
import ZX9SpeakerStore from "@/components/home/ZX9SpeakerStore";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <ShopSection />
      <ZX9SpeakerStore />
      <ZX7SpeakerStore/>
      <YX1Earphones/>
      <BestAudioGear/>
    </main>
  );
}
