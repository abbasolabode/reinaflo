import { useEffect } from "react";
import { useIsOpenMenu } from "../hooks/useIsOpenMenu";
import CampusExperience from "../sections/sectionsForHome/CampusExperience";
import Cards from "../sections/sectionsForHome/Cards";
import Herosection from "../sections/sectionsForHome/Herosection";
import Journey from "../sections/sectionsForHome/Journey";
import Mission from "../sections/sectionsForHome/Mission";
import OurFacilities from "../sections/sectionsForHome/OurFacilities";
import WelcomeSection from "../sections/sectionsForHome/WelcomeSection";

export default function Home() {
  const { isOpen } = useIsOpenMenu();
  
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <Herosection /> 
      <WelcomeSection />
      <Journey/>
      <Mission />
    {/*   <OurFacilities/> */}
      <Cards/>
      <CampusExperience/>
    </main>
  )
}
