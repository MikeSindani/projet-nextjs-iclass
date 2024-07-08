"use client";
import ImageServices from "@/asset/image/R.png";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const SectionServices = () => {
  return (
   
      <section
        id="services"
        className="flex flex-col-reverse bg-primary-color md:flex-row justify-center items-start space-x-3 px-16 md:h-[75dvh] w-full"
      >
        <div className="flex flex-col md:w-1/2 gap-3 p-6">
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <h1 className="font-bold text-left text-3xl md:text-4xl m-2">
            <span className="text-secondary-color">Historique </span>
          </h1>
          <p className="text-slate-900 font-normal text-justify text-md m-4">
            Le Restaurant-Boulangerie I Class a vu le jour au sein de la cité de
            Fungurume, en Juin 2015; période à laquelle nos clients
            bénéficiaient de nos services exclusivement sur place. Par la suite,
            sur base de la demande croissante du marché, nous avons pris la
            décision d{"'"}optimiser notre activité en proposant notamment des
            services de CATERING et plus tard encore, de HOUSEKEEPING/LAUNDRY.
            Nous avons depuis eu de nombreuses opportunités de collaboration
            avec diverses entreprises de Fungurume, kolwezi et de Lubumbashi, ce
            qui a largement contribué au développement et au renforcement de
            l {"'"}image de la société ICLASS SAS.
          </p>
          </ScrollAnimation>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={ImageServices}
            alt="nos services images"
            className="w-full h-max object-cover"
          />
        </div>
      </section>
  );
};

export default SectionServices;
