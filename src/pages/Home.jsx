import SocialSliderTray from "../components/SocialSliderTray";
import HeroSection from "../ui/HeroSection";
import Modal from "../ui/Modal";
import ProjectInquiry from "../ui/ProjectInquiry";
import SelectedWork from "../ui/SelectedWork";
import StackUi from "../ui/StackUi";
import ResumeButton from "../ui/ResumeButton";

export default function Home() {
  return (
    <main className="px-8 bg-linear-to-br flex flex-col from-black via-zinc-950 to-black min-h-screen">
      <HeroSection />
      <div className="flex justify-center mt-8">
        <ResumeButton />
      </div>
      <SelectedWork />
      <StackUi />
      <ProjectInquiry />
      <Modal />
      <SocialSliderTray />
    </main>
  );
}