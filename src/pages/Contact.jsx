import ContactSection from "../sections/sectionForContact/ContactSection";
import GetInTouchStatement from "../sections/sectionForContact/GetInTouchStatement";
import HeroContact from "../sections/sectionForContact/HeroContact";

export default function Contact() {
  return (
    <div className="">
       <HeroContact/>
       <GetInTouchStatement />
       <ContactSection/>
    </div>
  )
}
