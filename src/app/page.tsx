import ScrollyCanvas from "@/components/ScrollyCanvas";
import ResumeTabs from "@/components/ResumeTabs";
import ContactFooter from "@/components/ContactFooter";
import ChatBubble from "@/components/ChatBubble";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-neutral-100 font-sans relative">
      <ScrollyCanvas />
      <div className="relative bg-gradient-to-b from-[#121214] via-[#09090b] to-black">
        <ResumeTabs />
        <ContactFooter />
      </div>
      <ChatBubble />
    </main>
  );
}
