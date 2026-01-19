import CardWithButton from "./components/cardWithButton";
import Image from "next/image";
import { flags, svgs } from "./images";

export default function Home() {
  return (
    <CardWithButton buttonOne={svgs.examAlt} buttonTwo={svgs.registerAlt}>
      <div className="flex justify-center items-center space-x-3">
        <Image src={flags[0].src} alt={flags[0].alt} className="rounded-sm" />
        <h2 className="mx-8 text-2xl">
          Bienvenidos to Ana Luisa Spanish Classes
        </h2>
        <Image src={flags[1].src} alt={flags[1].alt} className="rounded-sm" />
      </div>
      <div className="mt-8 font-bold">
        <p className="flex flex-col gap-1">
          <span className="pb-4">
            Welcome to Ana Luisa Spanish classes. I have been teaching students
            in Cuenca, Ecuador for over 10 years.
          </span>
          <span>
            My goal is to involve our students and others who are learning
            Spanish with experiences that provide the opportunity
          </span>
          <span>
            to learn about the language and culture through different avenues
            such as group classes, lectures, and optional trips.
          </span>
          <span className="pt-4">
            We meet twice a week for 1 hour and 30 minutes each class. The
            entire session lasts for 6 weeks.
          </span>
        </p>
        <p className="flex flex-col gap-1 mt-8">
          <span>
            On the first day of class you will receive some materials which
            typically include:
          </span>
          <span className="pl-4">
            - A study packet with practice exercises and useful conjugations for
            this session.
          </span>
          <span className="pl-4">
            - A novel which we will use for reading and comprehension practice.
          </span>
          <span className="mt-4">
            At the end of each session there is a cultural event welcome to
            everyone and a student trip only available to students.
          </span>
        </p>
      </div>
    </CardWithButton>
  );
}
