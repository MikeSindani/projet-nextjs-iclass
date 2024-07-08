"use client";
import Image from "next/image";
import maps from "@/svg/maps.svg";
import phone from "@/svg/phone.svg";
import mail from "@/svg/mail.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function SectionsContact() {
  return (
    <section
      id="contact"
      className="flex flex-col p-6 md:p-10 relative top-0 left-0 w-full"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      ></div>
      <div className="overlay bg-black/75  backdrop-blur-sm absolute inset-0 top-0 left-0 w-full h-full"></div>
      <div className="flex flex-col space-y-3">
        <div className="m-3 relative">
          <h1 className="font-bold text-3xl md:text-4xl text-primary-color text-center m-3 text__content after:bg-orfex-vert">
            Contactez-nous
          </h1>
          <p className="text-md text-gray-100 text-center">
            N{"'"} hésitez pas à nous contactez pour plus d informations
          </p>
        </div>
        <div>
          <ScrollAnimation animateIn="fadeIn" delay={300}>
            <div className="flex flex-col">
              <div className="flex gap-2 max-md:flex-col-reverse">
                <div className="flex flex-col gap-3 w-full md:w-1/3 p-6 bg-white shadow-xl rounded-xl">
                  <h2 className="text-black font-semibold text-xl md:text-2xl">
                    Laissez-nous un message
                  </h2>
                  <div className="p-3">
                    <form
                      className="flex gap-5 flex-col justify-center "
                      action="https://formsubmit.co/amm@orfex.pro"
                      method="POST"
                      id="amm@orfex.pro"
                    >
                      <div className="flex flex-col">
                        <label for="name">
                          {" "}
                          <span className="label font-secondary-font text-orfex-vert">
                            Nom
                          </span>{" "}
                        </label>
                        <input
                          className=" p-3 bg-slate-100  w-full  text-black text-sm"
                          type="text"
                          name="name"
                          placeholder="Nom "
                        />
                      </div>
                      <div className="flex flex-col">
                        <label for="name">
                          {" "}
                          <span className="label font-secondary-font text-orfex-vert">
                            Email
                          </span>{" "}
                        </label>
                        <input
                          className=" p-3 bg-slate-100 text-black text-sm"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label for="name">
                          {" "}
                          <span className="label font-secondary-font text-orfex-vert">
                            Téléphone
                          </span>{" "}
                        </label>
                        <input
                          className=" p-3   w-full bg-slate-100 text-black text-sm"
                          type="tel"
                          name="phone"
                          placeholder="Numero de Téléphone"
                        />
                      </div>
                      <input
                        type="hidden"
                        name="_autoresponse"
                        value="Orfex Merci Pour Votre message!"
                      />
                      <input type="hidden" name="_template" value="basic" />
                      <input type="hidden" name="_captcha" value="false" />
                      <div className="flex flex-col">
                        <label for="name">
                          {" "}
                          <span className="label font-secondary-font text-orfex-vert">
                            Message
                          </span>{" "}
                        </label>
                        <textarea
                          className=" p-3   bg-slate-100 text-black text-sm"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                      </div>

                      <button className=" p-3 rounded-lg  text-white w-36 bg-orfex-vert hover:opacity-80 transition-all  text-sm">
                        Envoyer
                      </button>
                    </form>
                  </div>
                </div>
                <div id="maps" className="md:w-2/3 p-6 flex flex-col w-full">
                  <div
                    className="md:m-3"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "30px",
                      alignItems: "start",
                      flexWrap: "wrap",
                    }}
                  >
                    <div className="flex flex-col gap-1 justify-center items-center w-36">
                      <Image src={maps} alt="Logo" width={50} height={50} />
                      <div>
                        <a href="maps.google.com" className="text-sm font-bold">
                          1bis Av. Dr kahozi, Q/ Kabulameshi,C/ Lubumbashi, RDC
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center w-36">
                      <Image src={phone} alt="Logo" width={50} height={50} />
                      <div>
                        <a
                          href="tel:+243970519974"
                          className="text-sm font-bold"
                        >
                          +243 970 519 974
                        </a>
                      </div>
                      <div>
                        <a
                          href="tel:+243844488004"
                          className="text-sm font-bold"
                        >
                          +243 844 488 004
                        </a>
                      </div>
                      <div>
                        <a
                          href="tel:+243844488004"
                          className="text-sm font-bold"
                        >
                          +243 817 743 004
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center w-36">
                      <Image src={mail} alt="Logo" width={50} height={50} />
                      <div>
                        <a
                          href="mailto:amm@orfex.pro"
                          className="text-sm font-bold"
                        >
                          amm@orfex.pro
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:rms@orfex.pro"
                          className="text-sm font-bold"
                        >
                          rms@orfex.pro
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="map" className="w-full h-96 bg-slate-50 md:m-3">
                    orfex
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
