import { useEffect } from "react";
import ContactSection from "../sections/sectionForContact/ContactSection";
import GetInTouchStatement from "../sections/sectionForContact/GetInTouchStatement";
import HeroContact from "../sections/sectionForContact/HeroContact";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <HeroContact />
      <GetInTouchStatement />
      <ContactSection />
    </div>
  )
}
