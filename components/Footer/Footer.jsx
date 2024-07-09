import { ArrowBigLeft } from "lucide-react";
import React from "react";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="bg-secondary-color  flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col md:flex-row gap-10 p-24 justify-around items-start">
        <section className="flex flex-col gap-5 justify-center md:justify-normal items-center md:items-start">
          <div className="text-white uppercase text-2xl font-bold">iClass</div>
          <div className="text-base text-gray-400 font-normal md:w-96">
             iCLASS est une entreprise locale qui allie savoir-faire boulanger et expertise traiteur pour offrir à ses clients des produits et services de qualité
          </div>
          <div data-aos="fade-up" className="text-white flex gap-5">
            <div className="p-3  bg-color-social-footer rounded-full hover:bg-slate-700 transition-all">
              <a href="https://wa.me/243823828117?" target="_blank">
                {" "}
                <FaWhatsapp  size={24} />
              </a>
            </div>
            <div className="p-3  bg-color-social-footer rounded-full hover:bg-slate-700 transition-all">
              <a href="https://www.instagram.com/iclass_restaurant?igsh=MW5sN3gzMnZydWo4Mg==" target="_blank">
                <AiFillInstagram size={24} />
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h4 className="text-white font-bold">Explore</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-2 items-center">
              <FaArrowRight />
              <a
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
                href="index.html"
              >
                Accueil
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaArrowRight />
              <a
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
                href="#historique"
              >
                Historique
              </a>{" "}
            </li>
            <li className="flex gap-2 items-center">
              <FaArrowRight />
              <a
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
                href="#activites"
              >
                Nos activites
              </a>{" "}
            </li>

            <li className="flex gap-2 items-center">
              <FaArrowRight />
              <a
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
                href="#contact"
              >
                Contactez-nous
              </a>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-5">
          <h4 className="text-white font-bold">Vous avez des Questions?</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-map text-white"></i>{" "}
              <a
                href="tel:+243853000096"
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
              >
                Lubumbashi : 1bis Av. Dr kahozi, Q/ Kabulameshi,C/
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-map text-white"></i>{" "}
              <a
                href="tel:+243853000096"
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
              >
                Kolwezi : N 2eme Avenue, Centre ville, Commune de DILALA
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-map text-white"></i>{" "}
              <a
                href="tel:+243853000096"
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
              >
                Fungurume NO 4, Avenue MWELA MPANDE, Quartier BISSIPI, Commune
                de Fungurume
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-phone text-white"></i>{" "}
              <a
                href="tel:+243823828117"
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
              >
                {" "}
                NOC : +243 823 828 117
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope text-white"></i>{" "}
              <a
                href="mailto:patbwiza@iclass.site"
                className="text-gray-400 transition-all hover:text-white text-sm md:text-md"
              >
                patbwiza@iclass.site
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="h-[1px] mx-3 bg-primary-color w-full"></div>
      <div className=" text-white p-5 text-center">© Copyright iClass</div>
    </footer>
  );
}

const Footer1 = () => {
  return (
    <footer className="site-footer bg-secondary-color pt-12 pb-6 text-gray-300">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-6/12 xl:w-4/12 px-4 mb-4 md:mb-0">
            <h6 className="text-lg text-white font-bold mb-2">About</h6>
            <p className="text-gray-300 text-sm">
                  Nous mettons à votre dispositionun cadre soigné au sein duquel
                  vous pourrez jouir de la variété des mets qui font la richesse
                  de l{"'"}art culinaire Congolais ; en plus de quoi, nous
                  proposons également de venir vers vous, combler tous vos
                  besoins alimentaires ou encore faire resplendir vos
                  différents.
            </p>
          </div>

          <div className="w-full md:w-6/12 xl:w-4/12 px-4 mb-4 md:mb-0 hidden">
            <h6 className="text-lg text-white font-bold mb-2">Categories</h6>
            <ul className="footer-links list-none mb-0">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  C
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  UI Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  PHP
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  Java
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  Android
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-6/12 xl:w-4/12 px-4 mb-4 md:mb-0">
            <h6 className="text-lg text-white font-bold mb-2">Lien rapide</h6>
            <ul className="footer-links list-none mb-0">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  Historique
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  Nos activites
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  Avantages
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  Performances
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  Ressources
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-b border-gray-700 mb-4 mt-0" />
        <div className="flex max-md:flex-col justify-between p-3 items-center">
          <div className="flex flex-wrap justify-center mb-4">
            <p className="copyright-text text-gray-300 text-sm mb-0">
              Copyright &copy; iClass {new Date().getFullYear().toString()} All Rights Reserved by
            </p>
          </div>

          <div className="flex justify-center mb-4">
            <ul className="social-icons list-none mb-0 flex gap-3">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  {" "}
                  <AiFillInstagram size={24} />{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  {" "}
                  <AiFillMail size={24}/>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-500">
                  {" "}
                  <FaWhatsapp size={24}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
