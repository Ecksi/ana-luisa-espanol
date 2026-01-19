import Link from "next/link";

import Cuenca000 from "../../public/images/carousel/cuenca-000.jpg";
import Cuenca001 from "../../public/images/carousel/cuenca-001.jpg";
import Cuenca002 from "../../public/images/carousel/cuenca-002.jpg";
import Cuenca003 from "../../public/images/carousel/cuenca-003.jpg";
import Cuenca004 from "../../public/images/carousel/cuenca-004.jpg";
import Cuenca005 from "../../public/images/carousel/cuenca-005.jpg";
import Cuenca006 from "../../public/images/carousel/cuenca-006.jpg";
import Cuenca007 from "../../public/images/carousel/cuenca-007.jpg";
import Cuenca008 from "../../public/images/carousel/cuenca-008.jpg";
import Cuenca009 from "../../public/images/carousel/cuenca-009.jpg";
import Cuenca010 from "../../public/images/carousel/cuenca-010.jpg";
import Cuenca011 from "../../public/images/carousel/cuenca-011.jpg";
import Cuenca012 from "../../public/images/carousel/cuenca-012.jpg";
import Cuenca013 from "../../public/images/carousel/cuenca-013.jpg";
import Cuenca014 from "../../public/images/carousel/cuenca-014.jpg";
import Cuenca015 from "../../public/images/carousel/cuenca-015.jpg";
import Cuenca016 from "../../public/images/carousel/cuenca-016.jpg";
import Cuenca017 from "../../public/images/carousel/cuenca-017.jpg";
import Cuenca018 from "../../public/images/carousel/cuenca-018.jpg";
import Cuenca019 from "../../public/images/carousel/cuenca-019.jpg";
import Cuenca020 from "../../public/images/carousel/cuenca-020.jpg";
import Cuenca021 from "../../public/images/carousel/cuenca-021.jpg";
import Cuenca022 from "../../public/images/carousel/cuenca-022.jpg";
import Cuenca023 from "../../public/images/carousel/cuenca-023.jpg";

import describe001 from "../../public/images/exam/describe-1.png";
import describe002 from "../../public/images/exam/describe-2.png";
import describe003 from "../../public/images/exam/describe-3.png";
import describe004 from "../../public/images/exam/describe-4.png";
import describe005 from "../../public/images/exam/describe-5.png";
import describe006 from "../../public/images/exam/describe-6.png";
import describe007 from "../../public/images/exam/describe-7.png";

import comic001 from "../../public/images/exam/comic-1.jpg";
import comic002 from "../../public/images/exam/comic-2.jpg";
// import comic003 from "../../public/images/exam/comic-3.jpg";
import comic003b from "../../public/images/exam/comic-3b.jpg";
import comic004b from "../../public/images/exam/comic-4b.jpg";
// import comic004 from "../../public/images/exam/comic-4.jpg";
import comic005 from "../../public/images/exam/comic-5.jpg";

// import logo from "../../public/images/logo.png";

import FlagCuenca from "../../public/images/flag-cuenca.jpg";
import FlagEcuador from "../../public/images/flag-ecuador.jpg";

import EcuaLeft from "../../public/images/e-left.png";
import EcuaRight from "../../public/images/e-right.png";
import EcuaCenter from "../../public/images/e-center.png";
import EcuaAll from "../../public/images/e-all.png";

import logo from "../../public/images/logo.png";

import email from "../../public/images/socials/email.svg";
import facebook from "../../public/images/socials/facebook.svg";
import location from "../../public/images/socials/location.svg";
import whatsapp from "../../public/images/socials/whatsapp.svg";
import locationPic from "../../public/images/socials/location.png";

export const carousel = [
  { src: Cuenca000, alt: "Cuenca" },
  { src: Cuenca001, alt: "Cuenca" },
  { src: Cuenca002, alt: "Cuenca" },
  { src: Cuenca003, alt: "Cuenca" },
  { src: Cuenca004, alt: "Cuenca" },
  { src: Cuenca005, alt: "Cuenca" },
  { src: Cuenca006, alt: "Cuenca" },
  { src: Cuenca007, alt: "Cuenca" },
  { src: Cuenca008, alt: "Cuenca" },
  { src: Cuenca009, alt: "Cuenca" },
  { src: Cuenca010, alt: "Cuenca" },
  { src: Cuenca011, alt: "Cuenca" },
  { src: Cuenca012, alt: "Cuenca" },
  { src: Cuenca013, alt: "Cuenca" },
  { src: Cuenca014, alt: "Cuenca" },
  { src: Cuenca015, alt: "Cuenca" },
  { src: Cuenca016, alt: "Cuenca" },
  { src: Cuenca017, alt: "Cuenca" },
  { src: Cuenca018, alt: "Cuenca" },
  { src: Cuenca019, alt: "Cuenca" },
  { src: Cuenca020, alt: "Cuenca" },
  { src: Cuenca021, alt: "Cuenca" },
  { src: Cuenca022, alt: "Cuenca" },
  { src: Cuenca023, alt: "Cuenca" },
];

export const examPictures = {
  describePictures: [
    { src: describe001, alt: "Describe" },
    { src: describe002, alt: "Describe" },
    { src: describe003, alt: "Describe" },
    { src: describe004, alt: "Describe" },
    { src: describe005, alt: "Describe" },
    { src: describe006, alt: "Describe" },
    { src: describe007, alt: "Describe" },
  ],
  describeScenes: [
    { src: comic001, alt: "Comic" },
    { src: comic002, alt: "Comic" },
    // { src: comic003, alt: "Comic" },
    { src: comic003b, alt: "Comic" },
    { src: comic004b, alt: "Comic" },
    // { src: comic004, alt: "Comic" },
    { src: comic005, alt: "Comic" },
  ],
};

const navBlock = (
  name: string,
  svg: React.ReactElement
): React.ReactElement => (
  <Link href={name === "Home" ? "/" : "/" + name.toLocaleLowerCase()}>
    <div className="sm:flex sm:justify-center">{svg}</div>
    <span className="text-avena">{name}</span>
  </Link>
);

const hBlock = (name: string, svg: React.ReactElement): React.ReactElement => (
  <Link
    className="flex flex-row gap-2"
    href={name.includes("Exam") ? "/exam" : "/register"}
  >
    <div className="sm:flex sm:justify-center">{svg}</div>
    <span className="pt-0.5 text-amber-950">{name}</span>
  </Link>
);

export const svgs = {
  home: navBlock(
    "Home",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-avena"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  ),
  blog: navBlock(
    "Blog",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-avena"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
      />
    </svg>
  ),
  classes: navBlock(
    "Classes",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-avena"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  ),
  schedule: navBlock(
    "Schedule",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-avena"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  ),
  events: navBlock(
    "Events",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-avena"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  ),
  exam: navBlock(
    "Exam",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-avena"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
      />
    </svg>
  ),
  register: navBlock(
    "Register",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-avena"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
      />
    </svg>
  ),
  contact: navBlock(
    "Contact",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-avena"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  ),
  examAlt: hBlock(
    "Take the Exam",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-brown"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
      />
    </svg>
  ),
  registerAlt: hBlock(
    "Register for a class",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 filter-brown"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
      />
    </svg>
  ),
};

export const flags = [
  { src: FlagEcuador, alt: "Flag of Ecuador" },
  { src: FlagCuenca, alt: "Flag of Cuenca" },
];

export const ecuaPeople = [
  { src: EcuaLeft, alt: "Ecuadorians" },
  { src: EcuaRight, alt: "Ecuadorians" },
  { src: EcuaCenter, alt: "Ecuadorians" },
  { src: EcuaAll, alt: "Ecuadorians" },
];

export const logoInfo = {
  src: logo,
  alt: "Ana Luisa Logo",
};

export const socials = [
  {
    link: "https://www.facebook.com/AnaLuisaSpanishClasses/",
    src: facebook,
    alt: "Facebook",
  },
  {
    link: "https://wa.me/5930998358680",
    src: whatsapp,
    alt: "Whatsapp",
  },
  {
    link: "mailto:analuisa@gmail.com?subject=A%20quick%20question",
    src: email,
    alt: "Email",
  },
  {
    link: "https://maps.app.goo.gl/7a6wrCfK5Rxnxc748",
    src: location,
    alt: "Location",
  },
  {
    link: "",
    src: locationPic,
    alt: "A picture showing the front of the building for classes",
  },
];
