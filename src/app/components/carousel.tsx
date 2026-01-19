import Image from "next/image";
import { carousel } from "../images";

export default function Carousel() {
  return (
    <div className="figures inline-flex w-full flex-nowrap overflow-hidden py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-3">
        {carousel.map((img, index) => (
          <li key={index}>
            <Image
              src={img.src}
              alt={img.alt}
              priority={true}
              width={192}
              height={128}
              className="carousel h-32 w-48 rounded-sm"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-3"
        aria-hidden="true"
      >
        {carousel.map((img, index) => (
          <li key={index}>
            <Image
              src={img.src}
              alt={img.alt}
              width={192}
              height={128}
              className="carousel h-32 w-48 rounded-sm"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
