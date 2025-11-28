import Card from "../components/card";
import Image from "next/image";
import { ecuaPeople } from "../images";

const ranks = [
  {
    name: "Christmas Trip: Carmen Del Jadán",
    title:
      "In our beginner series of classes we will begin our foundational work and basic grammar skills. These skills will be the building blocks of your Spanish learning journey.",
    role: "November 29th",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Conversation Class: Improve your speaking",
    title:
      "Intermediate level classes continue building off of the skills we developed in the beginner series. We will start putting together concepts and practice our tenses. Before the end of these courses you should be able to hold coversations around town and feel way more comfortable with your Spanish.",
    role: "December 8th - 12th",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Pre-Beginner Class: Monday - Friday",
    title:
      "Our final series of courses the Advanced level. We will review and reinforce what you have learned so far, while improving our conversation with connectors and idioms.",
    role: "December 15th - 19th",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Next Session: January 5th - February 13th",
    title:
      "I offer online classes so that you can learn Spanish from anywhere in the world. I offer 1:1 and group sessions. Please Contact me for more information on these types of classes.",
    role: "January 5th - February 13th",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Events() {
  return (
    <Card>
      <div className="mb-6 flex  justify-center items-center space-x-3">
        <Image
          src={ecuaPeople[1].src}
          alt={ecuaPeople[1].alt}
          className="rounded-sm"
          height={100}
        />
        <h2 className="mx-8 text-amber-950 text-2xl">Events</h2>
        <Image
          src={ecuaPeople[2].src}
          alt={ecuaPeople[2].alt}
          className="rounded-sm"
          height={100}
        />
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mb-2">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ranks.map((rank, index) => (
            <li
              key={index}
              className="h-60 borders bg-camel col-span-1 divide-y divide-gray-200 rounded-lg shadow-sm"
            >
              <div className="flex w-full h-full items-start justify-between space-x-6 p-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl text-red-950">{rank.name}</h3>
                    <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-red-950 ring-1 ring-red-950/20 ring-inset">
                      {rank.role}
                    </span>
                  </div>
                  <p className="mt-1 text-md font-bold text-red-950">
                    {rank.title}
                  </p>
                </div>
                {/* <img
                  alt=""
                  src={rank.imageUrl}
                  className="size-10 shrink-0 rounded-full bg-gray-300"
                /> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
