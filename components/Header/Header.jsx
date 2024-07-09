"use client";
import logo from "@/svg/logo1.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenuLogo = useRef(null);
  const closeMenuLogo = useRef(null);
  const openMenu = useRef(null);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    openMenu.current?.classList.toggle("hidden");
    openMenuLogo.current?.classList.toggle("block");
    openMenuLogo.current?.classList.toggle("hidden");
    closeMenuLogo.current?.classList.toggle("hidden");
  };

  return (
    <header className="relative top-0 left-0 w-full h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="overlay bg-black/60 absolute inset-0 top-0 left-0 w-full h-full"></div>
        <div className=" absolute inset-0 top-0 left-0 w-full h-full flex flex-col  z-10">
          <div className="h-16 md:h-20 bg-primary-color flex justify-around items-center w-full ">
            <div class="text-white flex gap-3">
              <div className="hidden">
                <FaFacebook />
              </div>
              <div className="hidden">
                <a href="">
                  <FaSquareXTwitter />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/explore/tags/cinolu/"
                  target="_blank"
                >
                  <AiFillInstagram />
                </a>
              </div>
              <div className="hidden">
                <a
                  href="https://www.linkedin.com/company/cinolu/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="hidden md:flex">
                <a href="https://www.youtube.com/@cinolu6261" target="_blank">
                  <FaYoutube />
                </a>
              </div>
              <div className="flex">
                <a href="https://www.youtube.com/@cinolu6261" target="_blank">
                  <SiGooglemaps />
                </a>
              </div>
            </div>
            <div>
              <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <div>
              <div className="text-white flex items-center gap-3  font-bold">
                <a href="https://wa.me/243823828117?">
                  <FaWhatsapp />
                </a>
                <a href="tel:+243823828117">
                  <FaPhoneAlt />
                </a>
                <a className="max-md:hidden" href="tel:+243811819504">
                  <span>+243 823 828 117</span>
                </a>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <nav className="flex justify-between md:justify-center items-center p-10 h-20">
              <div className="flex items-center md:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={() => handleMenu()}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed. */}
                  {/* Menu open: "hidden", Menu closed: "block" */}
                  <div ref={openMenuLogo} className="flex gap-2">
                    <svg
                      className=" h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <span>Menu</span>
                  </div>

                  {/* Icon when menu is open. */}
                  {/* Menu open: "block", Menu closed: "hidden" */}
                  <div ref={closeMenuLogo} className="hidden">
                    <svg
                      className=" h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <ul className="flex justify-between items-center gap-5 max-md:hidden">
                <li>
                  <a
                    href="#"
                    className="text-md font-meduim text-white hover:text-gray-200"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-md font-meduim text-white hover:text-gray-200"
                  >
                    Historique
                  </a>
                </li>
                <li>
                  <a
                    href="#activites"
                    className="text-md font-meduim text-white hover:text-gray-200"
                  >
                    Nos activites
                  </a>
                </li>
                <li>
                  <a
                    href="#avantages"
                    className="text-md font-meduim text-white hover:text-gray-200"
                  >
                    Nos avantages
                  </a>
                </li>
                <li>
                  <a
                    href="#performances"
                    className="text-md font-meduim text-white hover:text-gray-200"
                  >
                    Performance
                  </a>
                </li>
                <li>
                  <a
                    href="#ressources"
                    className="text-md font-meduim text-white hover:text-gray-200"
                  >
                    Ressources
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-md font-meduim text-white hover:text-gray-200"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#map"
                    className="text-md font-meduim  text-white hover:text-gray-200"
                  >
                    Où sommes nous?
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-md font-normal hover:text-gray-200 max-md:hidden block  text-primary-color rounded-full"
                  >
                    Contactez-nous
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex justify-center items-center h-full w-full ">
              <div className="flex justify-center items-center flex-col space-y-3 w-72 h-72 absolute bottom-10 bg-primary-color rounded-full">
                <h1
                  className={` md:text-6xl text-4xl  text-white md:text-left island-moments-regular`}
                >
                  Bienvenu(e)
                </h1>
                <p className="text-sm md:text-md text-white text-justify">
                  Nous mettons à votre dispositionun cadre soigné au sein duquel
                  vous pourrez jouir de la variété des mets qui font la richesse
                  de l{"'"}art culinaire Congolais ; en plus de quoi, nous
                  proposons également de venir vers vous, combler tous vos
                  besoins alimentaires ou encore faire resplendir vos
                  différents.
                </p>
                <h1 className="xs:text-xl sm:text-3xl md:text-4xl font-bold text-white">
                  iClass
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu latéral ici */}
      <aside
        className={`fixed top-0 right-0 w-64 h-screen bg-secondary-color z-50 transform  transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex justify-between p-3">
            <h2 className="text-xl font-semibold mb-4 text-white">iClass</h2>
            <div ref={closeMenuLogo} className="hidden">
              <button
                onClick={() => handleMenu()}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg
                  className=" h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <ul>
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                Historique
              </a>
            </li>
            <li>
              <a
                href="#avantages"
                className="block px-4 py-2 text-sm text-white hover:text-gray-200"
              >
                Nos avantages
              </a>
            </li>
            <li>
              <a
                href="#performance"
                className="block px-4 py-2 text-sm text-white hover:text-gray-200"
              >
                Performance
              </a>
            </li>
            <li>
              <a
                href="#ressources"
                className="block px-4 py-2 text-sm text-white hover:text-gray-200"
              >
                Ressources
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#map"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                Où sommes nous?
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 text-sm text-white hover:borfex-bleu"
              >
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
}

export default Header;
