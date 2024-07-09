"use client";
import Image from "next/image";
import maps from "@/svg/maps.svg";
import phone from "@/svg/phone.svg";
import mail from "@/svg/mail.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import imageIngredient from "@/asset/svg/ingredient.svg";
import imageEco from "@/svg/eco.svg";
import imageRegime from "@/svg/poids.svg";
import imageServeur from "@/svg/serveur.svg";
export default function SectionsAbout() {
  return (
    <section
      id="Engagement"
      className="flex flex-col py-4 px-8 md:py-8 md:px-16 relative top-0 left-0 w-full "
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/6283833/pexels-photo-6283833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      ></div>
      <div className="overlay bg-black/50  backdrop-blur-sm absolute inset-0 top-0 left-0 w-full h-full"></div>
      <div className="flex flex-col space-y-3">
        <div className="m-3 relative">
          <h1 className="font-bold text-3xl md:text-4xl text-white text-center m-3 text__content after:bg-orfex-vert">
            Nos engagements envers vous!
          </h1>
        </div>
        <div className="flex max-md:flex-col gap-3 justify-center items-center">
          <ScrollAnimation
            animateIn="fadeIn"
            className="bg-white rounded-lg shadow-lg flex flex-col gap-3 p-6 justify-center items-center w-64 h-64"
          >
            <Image
              src={imageIngredient}
              alt="engredient frais"
              className="w-24 h-24 object-cover"
            />
            <h3 className="font-bold text-black text-center text-xl">
              Des {"'"}ingrédients frais, locaux et de saison pour votre bien.
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            className="bg-white rounded-lg shadow-lg flex flex-col gap-3 p-6 justify-center items-center w-64 h-64"
          >
            <Image
              src={imageEco}
              alt="engredient frais"
              className="w-24 h-24 object-cover"
            />
            <h3 className="font-bold text-black text-center text-xl">
              Démarche éco-responsable
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            className="bg-white rounded-lg shadow-lg flex flex-col gap-3 p-6 justify-center items-center w-64 h-64"
          >
            <Image
              src={imageRegime}
              alt="engredient frais"
              className="w-24 h-24 object-cover"
            />
            <h3 className="font-bold text-black text-center text-xl">
              Respect des régimes alimentaires et des allergies
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            className="bg-white rounded-lg shadow-lg flex flex-col gap-3 p-6 justify-center items-center w-64 h-64"
          >
            <Image
              src={imageServeur}
              alt="engredient frais"
              className="w-24 h-24 object-cover"
            />
            <h3 className="font-bold text-black text-center text-xl">
              Service personnalisé et attentionné
            </h3>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
