"use client";
import ImageServices from "@/asset/svg/performances.svg";
import ImagePerformances from "@/asset/image/performances.png";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const SectionsPerformances = () => {
  return (
    <section
      id="performances"
      className="flex flex-col-reverse bg-white md:flex-row justify-center items-start space-x-3 py-4 px-8 md:py-8 md:px-16  w-full "
    >
      <div className="flex flex-col md:w-1/2 gap-3 p-6">
        <h1 className="font-bold text-left text-3xl md:text-4xl m-2">
          <span className="text-primary-color">Nos Performances</span>
        </h1>
        <div className="text-slate-900 font-normal text-justify text-md m-4 flex flex-col space-y-2">
          <p>
            Dans le tableau ci-après, vous trouverez l{"'"}évolution de nos
            services dans le cadre du catering :
          </p>
          <ScrollAnimation animateIn="fadeIn">
            <Image
              src={ImagePerformances}
              alt="nos services images"
              className="w-full max-md:h-[80dvh]  h-full object-cover"
            />
          </ScrollAnimation>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={ImageServices}
          alt="nos services images"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
export function SectionsPerformancesSuite() {
  return (
    <div className="flex flex-col space-y-2 bg-white text-black px-16">
      <p>
        Afin d{"'"}illustrer la confiance acquise dans nos rapports avec nos
        partenaires, nous pouvons souligner la mission que nous a récemment
        confié l{"'"}entreprise NB Mining.
      </p>
      <p>
        En effet, nous avons depuis peu à notre charge la gestion de leur
        nouveau Guest-house (AIJRA) pour expatriés.
      </p>
      <p>Nos équipes y effectuent quotidiennement les tâches suivantes :</p>
      <ul className="list-disc ml-6">
        <li className="text-primary-color">
          Préparation et mise en place des repas du matin, de midi et du soir.
        </li>
        <li className="text-primary-color">Entretien sanitaire des locaux.</li>
        <li className="text-primary-color">Lavages domestiques (Lessive, vaisselle).</li>
        <li className="text-primary-color">Gestion des déchets</li>
      </ul>
      <p className="font-bold">
        Par ailleurs, nous sommes partenaires de Tenke Fungurume Mining dans le
        cadre du contrat de service Numéro CW222247S. Nous nous occupons du
        service traiteur de leurs conférences, ateliers, formations, forums,
        expositions ou toute autre cérémonie se déroulant au sein de la
      </p>
    </div>
  );
}

export default SectionsPerformances;
