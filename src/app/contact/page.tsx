import Card from "../components/card";
import Image from "next/image";
import { socials } from "../images";

export default function Contact() {
  const social = (
    href: string,
    img: HTMLImageElement,
    alt: string
  ): React.ReactElement => (
    <a className="" href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center mb-6">
        <Image
          className="filter-brown"
          src={img}
          alt={alt}
          width={30}
          height={30}
        />
        {dot}
        <span className="w-18 text-center">{alt}</span>
        {dot}
      </div>
    </a>
  );

  const dot: React.ReactElement = (
    <div className="flex items-center px-4">&#x2022;</div>
  );

  return (
    <Card>
      <div className="flex flex-col">
        <h2 className="text-2xl text-center">Contact Me</h2>
        <span className="mt-4 mb-8 text-center font-bold">
          I can be reached via FaceBook, WhatsApp, or Email messages.
        </span>
      </div>
      <div className="px-12 pb-4 flex gap-36 justify-around">
        <div className="self-center">
          {social(socials[0].link, socials[0].src, socials[0].alt)}
          {social(socials[1].link, socials[1].src, socials[1].alt)}
          {social(socials[2].link, socials[2].src, socials[2].alt)}
          {social(socials[3].link, socials[3].src, socials[3].alt)}
        </div>
        <Image
          src={socials[4].src}
          alt={socials[4].alt}
          width={350}
          height={350}
        />
      </div>
    </Card>
  );
}
