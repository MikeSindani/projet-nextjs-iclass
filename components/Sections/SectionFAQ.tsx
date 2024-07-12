"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const SectionFAQ = () => {
  return (
    <section
      id="faq"
      className="flex flex-col  px-4 py-10 md:px-16 space-y-2 bg-primary-color"
    >
      <ScrollAnimation animateIn="fadeIn" delay={300}>
        <div className="m-3">
          <h1 className="font-bold text-3xl md:text-4xl  text-center m-3 text-secondary-color">
            FAQ
          </h1>
          <p className="text-md text-white text-center">
            Questions fréquemment posées.
          </p>
        </div>
        <div className="md:mx-[25%] mx-[20px] overflow-clip">
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Q: Qu{"'"}est-ce que I Class Restaurant-Boulangerie offre?
              </AccordionTrigger>
              <AccordionContent>
                A: Nous offrons une variété de plats congolais dans un cadre
                soigné, ainsi que des services de catering et de
                housekeeping/laundry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Q: Quel est l{"'"}historique de I Class Restaurant-Boulangerie?
              </AccordionTrigger>
              <AccordionContent>
                A: Nous avons été établis en juin 2015 à Fungurume, initialement
                offrant des services exclusivement sur place. Nous avons ensuite
                élargi nos services pour inclure le catering et le
                housekeeping/laundry, ce qui nous a permis de collaborer avec de
                nombreuses entreprises à Fungurume, Kolwezi et Lubumbashi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Q: Quels sont les avantages financiers de choisir I Class
                Restaurant-Boulangerie?
              </AccordionTrigger>
              <AccordionContent>
                A: Nos repas sont en moyenne 20% moins chers que ceux des autres
                fournisseurs locaux. Nous offrons également une facilité de
                gestion de la trésorerie avec un paiement unique mensuel, ce qui
                vous permet de réaffecter vos économies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Q: Quelle est la qualité de l{"'"}équipe de I Class
                Restaurant-Boulangerie?{" "}
              </AccordionTrigger>
              <AccordionContent>
                A: Nous avons une équipe passionnée et qualifiée, incluant des
                chefs créatifs, qui s{"'"}engagent à offrir une expérience culinaire
                exceptionnelle à chacun de nos clients. Nous nous assurons
                également de la satisfaction et du bien-être de nos employés.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Q: Quels sont les partenariats de I Class
                Restaurant-Boulangerie?{" "}
              </AccordionTrigger>
              <AccordionContent>
                A: Nous sommes fiers de nos partenariats avec des entreprises
                telles que NB Mining, qui nous a confié la gestion de leur
                nouveau guest-house (AIJRA) pour expatriés, et Tenke Fungurume
                Mining, avec qui nous collaborons pour les services de catering
                de leurs événements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Q: Quels sont les services de housekeeping/laundry que vous
                offrez?{" "}
              </AccordionTrigger>
              <AccordionContent>
                A: Nous offrons des services de housekeeping/laundry complets,
                incluant la préparation et la mise en place des repas,
                l{"'"}entretien sanitaire des locaux, les lavages domestiques
                (lessive, vaisselle) et la gestion des déchets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Q: Pouvez-vous personnaliser vos services en fonction des
                besoins de mes employés?{" "}
              </AccordionTrigger>
              <AccordionContent>
                A: Oui, nous sommes flexibles et nous pouvons adapter nos
                services pour répondre spécifiquement aux besoins de vos
                employés.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Q: Comment gérez-vous la qualité de vos services?{" "}
              </AccordionTrigger>
              <AccordionContent>
                A: Nous nous assurons de la qualité de nos services en
                établissant des normes élevées pour nos employés, en fournissant
                une formation continue et en évaluant régulièrement la
                satisfaction de nos clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Q: Quels sont les moyens de paiement acceptés?
              </AccordionTrigger>
              <AccordionContent>
                A: Nous acceptons les paiements mensuels uniques pour faciliter
                la gestion de la trésorerie de nos clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Q: Comment puis-je obtenir plus d{"'"}informations sur vos services?
              </AccordionTrigger>
              <AccordionContent>
                A: Vous pouvez nous contacter directement pour obtenir plus
                d{"'"}informations sur nos services et discuter de vos besoins
                spécifiques.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>
                 Q: Puis-je faire une réservation pour un événement spécial?
              </AccordionTrigger>
              <AccordionContent>
              A: Oui, nous sommes heureux de vous aider à organiser vos événements spéciaux, tels que des mariages, des anniversaires ou des réunions d{"'"}affaires. Veuillez nous contacter pour discuter de vos besoins spécifiques.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SectionFAQ;
