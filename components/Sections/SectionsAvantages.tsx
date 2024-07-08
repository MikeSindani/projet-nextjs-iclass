"use client";
import ImageServices from "@/asset/svg/financiere.svg";
import ImageServicesTechniques from "@/asset/svg/technique.svg";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const SectionsAvantages = () => {
  return (
    <section
      id="avantages"
      className="flex flex-col bg-white justify-center items-start space-x-3 py-8 px-16  w-full"
    >
      <div className="m-3 relative">
        <h1 className="font-bold text-3xl md:text-4xl text-primary-color text-center m-3 text__content ">
          Avantages
        </h1>
        <p className="text-md text-gray-900 text-center">
          Nous tenions à souligner des éventuels avantages à opter pour une
          collab- oration avec IClass ; regroupons ces derniers en deux
          catégories.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-start space-x-3">
        <div className="flex md:w-1/2 gap-3 p-6">
          <div className="flex justify-center items-center md:w-1/3">
            <Image
              src={ImageServices}
              alt="nos services images"
              className="w-full h-max object-cover"
            />
          </div>
          <ScrollAnimation animateIn="fadeIn" delay={300} className="md:w-2/3">
            <h2 className="font-bold text-left text-xl md:text-2xl m-2">
              <span className="text-primary-color uppercase">Financiers</span>
            </h2>
            <p className="text-slate-900 font-normal text-justify text-md m-4 flex flex-col space-y-2">
                Les repas que nous fournissons ont en moyenne un coût de 20%
                inférieur par rapport à la plupart des autres fournisseurs sur
                le marché local. Nous favorisons du gain de temps et une
                facilité de gestion de la trésorerie par le biais d'un payement
                unique mensuel. Possibilité de réallocation des économies
              
            </p>
          </ScrollAnimation>
        </div>
        <div className="flex md:w-1/2 gap-3 p-6">
          <div className="flex justify-center items-center md:w-1/3">
            <Image
              src={ImageServicesTechniques}
              alt="nos services images"
              className="w-full h-max object-cover"
            />
          </div>
          <ScrollAnimation animateIn="fadeIn" delay={300} className="md:w-2/3">
            <h2 className="font-bold text-left text-xl md:text-2xl m-2">
              <span className="text-primary-color uppercase">Technique</span>
            </h2>
            <p className="text-slate-900 font-normal text-justify text-md m-4 flex flex-col space-y-2">
                Notre équipe des employés passionnés et qualifiés, parmi
                lesquels des chefs créatifs. Nous nous engageons à offrir une
                expérience culinaire exceptionnelle à chacun de nos clients.
                Satisfaction et maintien de la ressource humaine en bonne santé.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default SectionsAvantages;
