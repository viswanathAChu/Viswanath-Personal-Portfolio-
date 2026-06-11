import ScrollyCanvas from "@/components/ScrollyCanvas";
import ResumeTabs from "@/components/ResumeTabs";
import ContactFooter from "@/components/ContactFooter";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main id="home" className="bg-black min-h-screen text-neutral-100 relative">
      <Navbar />
      <ScrollyCanvas />
      <div className="relative bg-gradient-to-b from-[#0a0a0a] via-[#09090b] to-black pt-8">
        <div id="profile">
          <ResumeTabs />
        </div>
        <div id="contact">
          <ContactFooter />
        </div>
      </div>
    </main>
  );
}
