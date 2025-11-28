import Image from "next/image";
import { socials } from "../images";

export default function Footer() {
  const socialLink = (
    href: string,
    img: HTMLImageElement,
    alt: string
  ): React.ReactElement => (
    <div className="flex items-center">
      <a className="" href={href} target="_blank" rel="noopener noreferrer">
        <Image
          className="filter-avena"
          src={img}
          alt={alt}
          width={30}
          height={30}
        />
      </a>
    </div>
  );

  return (
    <>
      <div className="border-rope bg-camel flex justify-center h-6 mt-8 border-t-4" />
      <div className="bg-rope text-avena flex justify-center my-2 h-16">
        {socialLink(socials[0].link, socials[0].src, socials[0].alt)}
        <div className="flex items-center px-8">&#x2022;</div>
        <div className="flex items-center">
          <a
            href="https://maps.app.goo.gl/7a6wrCfK5Rxnxc748"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col">
              <span className="font-bold text-center">
                Ana Luisa Spanish Classes
              </span>
              <span className="font-bold text-center">
                Calle Large 5-06 y Mariano Cueva
              </span>
            </div>
          </a>
        </div>
        <div className="flex items-center px-8">&#x2022;</div>
        {socialLink(socials[1].link, socials[1].src, socials[1].alt)}
      </div>
      <div className="border-rope bg-camel flex justify-center h-6 mb-4 border-b-4" />
    </>
  );
}
