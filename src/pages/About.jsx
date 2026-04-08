import AboutHeroSection from "../sections/sectionForAbout/AboutHeroSection";
import Mission from "../sections/sectionForAbout/Mission";
import Philosophy from "../sections/sectionForAbout/Philosophy";
import Story from "../sections/sectionForAbout/Story";
import Vision from "../sections/sectionForAbout/Vision";

export default function About() {
  return (
    <div className=" flex flex-col pb-8 space-y-8">
      <AboutHeroSection />
      <Story />
      <Philosophy />
      <Vision />
      <Mission/>
    </div>
  )
}
