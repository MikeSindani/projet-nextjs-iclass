import Image from "next/image";
import Header from "@/components/Header/Header"
import SectionFAQ from "@/components/Sections/SectionFAQ";
import SectionsAbout from "@/components/Sections/SectionsAbout";
import SectionServices from '@/components/Sections/SectionServices'
import SectionContact from "@/components/Sections/SectionContact";
import Footer from "@/components/Footer/Footer"
import SectionActivites from '@/components/Sections/SectionsActivites'
import SectionsAvantages from "@/components/Sections/SectionsAvantages";
import SectionsPerformances, { SectionsPerformancesSuite } from "@/Sections/SectionsPerformances";
import SectionsRessources from '@/Sections/SectionsRessources'
import ReturnButton from "@/Btn/ReturnBouton"
export default function Home() {
  return (
    <main id="haut" className="flex flex-col">
        <Header/>
        <SectionServices/>
        <SectionActivites/>
        <SectionsAvantages/>
        <SectionsAbout/>
        <SectionsPerformances/>
        <SectionsPerformancesSuite/>
        <SectionsRessources/>
        <SectionContact/>
        <SectionFAQ/>
        <Footer/>
        <ReturnButton/>
    </main>
  );
}
