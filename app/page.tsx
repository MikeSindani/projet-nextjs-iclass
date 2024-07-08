import Image from "next/image";
import Header from "@/components/Header/Header"
import SectionFAQ from "@/components/Sections/SectionFAQ";
import SectionAbout from "@/components/Sections/SectionAbout";
import SectionServices from '@/components/Sections/SectionServices'
import SectionContact from "@/components/Sections/SectionContact";
import Footer from "@/components/Footer/Footer"
import SectionActivites from '@/components/Sections/SectionsActivites'
import SectionsAvantages from "@/components/Sections/SectionsAvantages";

export default function Home() {
  return (
    <main className="flex flex-col">
        <Header/>
        <SectionServices/>
        <SectionActivites/>
        <SectionsAvantages/>
        <SectionContact/>

        <SectionFAQ/>
        <Footer/>
    </main>
  );
}
