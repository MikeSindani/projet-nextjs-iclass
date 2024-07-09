"use client";
import ImageServices from "@/asset/svg/Ressources.svg";
import "animate.css/animate.compat.css";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const SectionsRessources = () => {
  return (
    <section
      id="ressources"
      className="flex flex-col-reverse bg-white md:flex-row justify-center items-start space-x-3 py-4 px-8 md:py-8 md:px-16  w-full"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={ImageServices}
          alt="nos services images"
          className="w-full h-max object-cover"
        />
      </div>

      <div className="flex flex-col md:w-1/2 gap-3 p-6 w-screen">
        <h1 className="font-bold text-left text-3xl md:text-4xl m-2">
          <span className="text-primary-color">Nos Ressources</span>
        </h1>
        <ScrollAnimation animateIn="fadeInRight">
          <div className="text-slate-900 font-normal text-justify text-md m-4 flex flex-col space-y-2">
            <p>
              Notre entreprise dispose de ressources matérielles garantissant la
              satisfaction de nos Clients et la tenue de engagements en termes
              de qualité de service, à savoir :
            </p>
            <ul className="list-disc ml-6">
              <li className="text-primary-color text-sm">
                Véhicules de livraison
              </li>
              <li className="text-primary-color text-sm">
                Équipement de cuisine de pointe
              </li>

              <li className="text-primary-color text-sm">
                Chauffandises et matériel de conservation d'aliments totalement
                étanches
              </li>
              <li className="text-primary-color text-sm">
                Équipes expérimentées et d'une flexibilité à toute epreuve
              </li>

              <li className="text-primary-color text-sm">
                Chaine d'approvisionnement totalement intégrée et respectant la
                chaine du froid pour la qualité et l'hygiène des aliments
              </li>
            </ul>
            <p className="font-bold">
              Ces ressources ne sont pas exhaustives et nous sommes en mesure de
              les adapter en fonction de l'envergure d'un projet donné.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SectionsRessources;
