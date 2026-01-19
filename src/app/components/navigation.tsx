import Link from "next/link";
import Image from "next/image";
import { logoInfo, svgs } from "../images";

export default function Navigation() {
  return (
    <>
      <div className="upper-bar bg-rope hidden font-bold sm:flex sm:justify-center sm:h-37 sm:pr-6 sm:shadow-lg">
        <div className="sm:flex sm:justify-center sm:w-1/2 sm:h-16 sm:pt-3.5 sm:gap-16">
          {svgs.home}
          {svgs.blog}
          {svgs.classes}
          {svgs.schedule}
        </div>
        <div>
          <Link href="/">
            <Image
              alt={logoInfo.alt}
              src={logoInfo.src}
              style={{
                margin: "12px 0 0 12px",
                height: "125px",
                width: "125px",
              }}
              // width={150}
            />
          </Link>
        </div>
        <div className="sm:flex sm:justify-center sm:w-1/2 sm:h-16 sm:pt-3.5 sm:gap-16">
          {svgs.events}
          {svgs.exam}
          {svgs.register}
          {svgs.contact}
        </div>
      </div>
      <div className="middle-bar bg-camel hidden sm:flex sm:h-8" />
      <div className="bottom-bar bg-rope hidden sm:flex sm:h-8 sm:mt-2 sm:mb-10" />
    </>
  );
}
