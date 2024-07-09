"use client";
import ImageServices from "@/asset/svg/activites.svg";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const SectionActivites = () => {
  return (
    <section
      id="activites"
      className="flex flex-col-reverse bg-white md:flex-row justify-center items-start space-x-3 py-8 px-16  w-full"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={ImageServices}
          alt="nos services images"
          className="w-full h-max object-cover"
        />
      </div>
      <div className="flex flex-col md:w-1/2 gap-3 p-6">
          <h1 className="font-bold text-left text-3xl md:text-4xl m-2">
            <span className="text-primary-color">Nos activites</span>
          </h1>
          <ScrollAnimation animateIn="fadeInRight">
          <div className="text-slate-900 font-normal text-justify text-md m-4 flex flex-col space-y-2">
            <p>
              Tel qu'évoqué plus haut, l'essentiel de nos activités se rapporte
              au cadre culinaire, notamment:
            </p>
            <ul class="list-disc ml-5">
              <li class="text-primary-color font-bold">LA RESTAURATION (Au sein de nos locaux)</li>
              <li class="text-primary-color font-bold">LE CATERING.</li>
              <li class="text-primary-color font-bold" >LE RESTAURANT.</li>
              <li class="text-primary-color font-bold">HOUSEKEEPING</li>
              <li class="text-primary-color font-bold"> BOULANGERIE/PATISSERIE</li>
            </ul>
            <p>
              Etant donné l'envergure de notre vision sur le long terme, nous
              avons récemment entrepris d'offrir des services dans le cadre de
              l'hygiène/ assainissement (HOUSEKEEPINC) et nous sommes largement
              satisfaits des retours obtenus sur la qualité de ces derniers.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SectionActivites;
