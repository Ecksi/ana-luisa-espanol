"use client";

import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import Card from "../components/card";
import Image from "next/image";
import Link from "next/link";
import { examPictures } from "../images";
import { Button } from "@headlessui/react";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  console.log(window.history);
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.history.pushState({}, document.title, "/exam");
}

const backToTop = (
  <button
    className="absolute -right-4 -bottom-4 p-1 border-4 rounded-full cursor-pointer"
    onClick={scrollToTop}
  >
    <ChevronUpIcon aria-hidden="true" className="text-red-950 size-6" />
  </button>
);

const mulitpleChoiceQnA = [
  {
    id: 1,
    question: "Juan ______ Ecuatoriano.",
    options: ["Es", "En", "Está", "Ser", "I don't know"],
    answer: "",
  },
  {
    id: 2,
    question: "Pedro va al centro ______ comprar café.",
    options: ["En", "Es", "Para", "Por", "I don't know"],
    answer: "",
  },
  {
    id: 3,
    question: "Luis ______ sus llaves.",
    options: ["Pierde", "Perder", "Perdemos", "Puedo", "I don't know"],
    answer: "",
  },
  {
    id: 4,
    question: "Antes ______ café todos los días en el pasado.",
    options: ["Preparo", "Preparaba", "Preparé", "Preparamos", "I don't know"],
    answer: "",
  },
  {
    id: 5,
    question: "El restaurante está ______ de la iglesia.",
    options: ["En", "Es", "Al lado", "Debajo", "I don't know"],
    answer: "",
  },
  {
    id: 6,
    question: "El año pasado Pedro ______ a Galápagos.",
    options: ["Visitar", "Visitó", "Visitará", "Visitamos", "I don't know"],
    answer: "",
  },
  {
    id: 7,
    question: "Espero que usted ______ buen día.",
    options: ["Tiene", "Tuvo", "Tenga", "I don't know"],
    answer: "",
  },
  {
    id: 8,
    question: "Yo ______ 40 años.",
    options: ["Soy", "Tiene", "Tengo", "I don't know"],
    answer: "",
  },
  {
    id: 9,
    question: "Juan ______ a las 7 de la mañana.",
    options: ["Levante", "Levantarse", "Se Levanta", "I don't know"],
    answer: "",
  },
  {
    id: 10,
    question: "¿Compra un diccionario en Ecuador?",
    options: ["Sí, cómprolo", "Sí, comprarlo", "Sí, lo compro", "I don't know"],
    answer: "",
  },
  {
    id: 11,
    question: "Si Cuenca  ______ playa, nosotros  ______ .",
    options: [
      "Tiene / Nadamos",
      "Tuviera / Nadaríamos",
      "Tenga / Nademos",
      "I don't know",
    ],
    answer: "",
  },
  {
    id: 12,
    question: "¿María le muestra fotos a sus amigos?",
    options: [
      "Sí, le las muestras",
      "Sí, muéstrales",
      "Sí, se las muestra",
      "I don't know",
    ],
    answer: "",
  },
  {
    id: 13,
    question: "A Juan ______ terminó el azúcar.",
    options: ["Le", "Le la", "Se le", "I don't know"],
    answer: "",
  },
];

const shortResponseOptions = [
  "Escriba sobre sus actividades diarias en Cuenca.",
  "Escriba usando el PASADO sobre el mejor o el peor viaje de su vida.",
  "Escriba cinco sugerencias para un amigo que quiere visitar Ecuador. (Use Subjuntivo)",
];

export default function Exam() {
  const [exam, setExam] = useState({
    describePicture: [
      { id: 0, answer: "" },
      { id: 1, answer: "" },
      { id: 2, answer: "" },
      { id: 3, answer: "" },
      { id: 4, answer: "" },
      { id: 5, answer: "" },
      { id: 6, answer: "" },
    ],
    mulitpleChoiceQnA: [
      {
        id: 0,
        question: "Juan ______ Ecuatoriano.",
        options: ["Es", "En", "Está", "Ser", "I don't know"],
        answer: "",
      },
      {
        id: 1,
        question: "Pedro va al centro ______ comprar café.",
        options: ["En", "Es", "Para", "Por", "I don't know"],
        answer: "",
      },
      {
        id: 2,
        question: "Luis ______ sus llaves.",
        options: ["Pierde", "Perder", "Perdemos", "Puedo", "I don't know"],
        answer: "",
      },
      {
        id: 3,
        question: "Antes ______ café todos los días en el pasado.",
        options: [
          "Preparo",
          "Preparaba",
          "Preparé",
          "Preparamos",
          "I don't know",
        ],
        answer: "",
      },
      {
        id: 4,
        question: "El restaurante está ______ de la iglesia.",
        options: ["En", "Es", "Al lado", "Debajo", "I don't know"],
        answer: "",
      },
      {
        id: 5,
        question: "El año pasado Pedro ______ a Galápagos.",
        options: ["Visitar", "Visitó", "Visitará", "Visitamos", "I don't know"],
        answer: "",
      },
      {
        id: 6,
        question: "Espero que usted ______ buen día.",
        options: ["Tiene", "Tuvo", "Tenga", "I don't know"],
        answer: "",
      },
      {
        id: 7,
        question: "Yo ______ 40 años.",
        options: ["Soy", "Tiene", "Tengo", "I don't know"],
        answer: "",
      },
      {
        id: 8,
        question: "Juan ______ a las 7 de la mañana.",
        options: ["Levante", "Levantarse", "Se Levanta", "I don't know"],
        answer: "",
      },
      {
        id: 9,
        question: "¿Compra un diccionario en Ecuador?",
        options: [
          "Sí, cómprolo",
          "Sí, comprarlo",
          "Sí, lo compro",
          "I don't know",
        ],
        answer: "",
      },
      {
        id: 10,
        question: "Si Cuenca  ______ playa, nosotros  ______ .",
        options: [
          "Tiene / Nadamos",
          "Tuviera / Nadaríamos",
          "Tenga / Nademos",
          "I don't know",
        ],
        answer: "",
      },
      {
        id: 11,
        question: "¿María le muestra fotos a sus amigos?",
        options: [
          "Sí, le las muestras",
          "Sí, muéstrales",
          "Sí, se las muestra",
          "I don't know",
        ],
        answer: "",
      },
      {
        id: 12,
        question: "A Juan ______ terminó el azúcar.",
        options: ["Le", "Le la", "Se le", "I don't know"],
        answer: "",
      },
    ],
    describeScene: [
      { id: 0, answer: null },
      { id: 1, answer: null },
      { id: 2, answer: null },
      { id: 3, answer: null },
      { id: 4, answer: null },
    ],
    shortResponse: [
      { id: 0, answer: null },
      { id: 2, answer: null },
      { id: 3, answer: null },
    ],
  });

  const dot: React.ReactElement = (
    <div className="flex items-center px-4">&#x2022;</div>
  );

  const examHeader = (
    <Card>
      <h2 id="top" className="mb-6 text-2xl text-center">
        Spanish Test
      </h2>

      <>
        Welcome to the Spanish placement test. This test is broken up into 4
        sections: Describe the picture, multiple choice, describe the comic, and
        short responses.
        <br />
        <br />
        The test should take about xx minutes to complete, but take as long as
        you need. Please be sure to complete the entire test before submitting
        it.
      </>

      <>
        <div className="my-8 text-center">
          <h3 className="text-xl">Jump to section</h3>
          <p className="">
            Click on a button to jump to that section of the test.
          </p>
        </div>
        <ul className="flex justify-center gap-16">
          <div>
            <Link
              href="#describe-picture"
              className="flex justify-center mb-8 p-4 w-3xs border-dashed border-2 rounded-lg"
            >
              {dot}
              <li>Describe the Picture</li>
              {dot}
            </Link>
            <Link
              href="#multiple-choice"
              className="flex justify-center p-4 w-3xs border-dashed border-2 rounded-lg"
            >
              {dot}
              <li>Multiple Choice</li>
              {dot}
            </Link>
          </div>
          <div>
            <Link
              href="#describe-comic"
              className="flex justify-center mb-8 p-4 w-3xs border-dashed border-2 rounded-lg"
            >
              {dot}
              <li>Describe the Comic</li>
              {dot}
            </Link>
            <Link
              href="#short-response"
              className="flex justify-center p-4 w-3xs border-dashed border-2 rounded-lg"
            >
              {dot}
              <li>Short Responses</li>
              {dot}
            </Link>
          </div>
        </ul>
      </>
    </Card>
  );

  const describePicture = (
    <Card>
      <>
        <h2 id="describe-picture" className="mb-6 text-2xl text-center">
          Describe the Picture
        </h2>
      </>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        {examPictures.describePictures.map((picture, index) => (
          <li key={index} className="relative border-2 rounded-lg">
            <div className="group overflow-hidden rounded-lg focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-rope">
              <Image
                alt={picture.alt}
                src={picture.src}
                width={200}
                height={200}
                className="mx-auto mt-4 pointer-events-none aspect-square object-contain outline -outline-offset-1 group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-hidden"
              />
              <div>
                <label
                  htmlFor={picture.alt + "-" + index}
                  className="block text-sm/6 font-medium"
                />
                <div className="relative mx-auto mt-2 mb-4 w-64">
                  <input
                    id={picture.alt + "-" + index}
                    name={picture.alt + "-" + index}
                    type="text"
                    onChange={(e) => {
                      setExam({
                        ...exam,
                        describePicture: {
                          ...exam.describePicture,
                          [index]: {
                            ...exam.describePicture[index],
                            answer: e.target.value,
                          },
                        },
                      });
                    }}
                    placeholder="Describe the Picture"
                    className="peer block w-full bg-gray-50 px-3 py-1.5 text-red-950 placeholder:text-gray-500 focus:outline-none sm:text-sm/6 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {backToTop}
    </Card>
  );

  const multipleChoice = (
    <Card>
      <>
        <h2 id="multiple-choice" className="mb-6 text-2xl text-center">
          Multiple Choice
        </h2>
      </>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {mulitpleChoiceQnA.map((choice, index) => (
          <ul role="list" key={choice.id}>
            <li className="border-2 rounded-lg">
              <div className="group rounded-lg focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-rope">
                <fieldset>
                  <legend className="flex items-center h-20 p-4 mx-auto text-center text-lg font-semibold">
                    {choice.question}
                  </legend>
                  <div className="divide-y divide-rope border-t-2 border-rope">
                    {choice.options.map((option, optionIndex) => (
                      <div
                        key={choice.id + optionIndex}
                        className="relative flex items-start p-4 cursor-pointer"
                      >
                        <label
                          htmlFor={choice.id + "-" + optionIndex}
                          className="min-w-0 flex-1 text-sm/6 font-bold select-none cursor-pointer"
                        >
                          {option}
                        </label>
                        <div className="ml-3 flex h-6 items-center">
                          <input
                            // defaultChecked={
                            //   exam.mulitpleChoiceQnA[index].answer !==
                            //   choice.answer
                            // }
                            onChange={(e) => {
                              setExam({
                                ...exam,
                                mulitpleChoiceQnA: {
                                  ...exam.mulitpleChoiceQnA,
                                  [index]: {
                                    ...exam.mulitpleChoiceQnA[index],
                                    answer: e.target.name,
                                  },
                                },
                              });
                            }}
                            type="radio"
                            id={choice.id + "-" + optionIndex}
                            value={choice.id + "-" + optionIndex + "-" + option}
                            name={index.toString()}
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-rope checked:bg-rope focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden  cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </li>
          </ul>
        ))}
      </div>
      {backToTop}
    </Card>
  );

  const describeScene = (
    <Card>
      <>
        <h2 id="describe-comic" className="mb-6 text-2xl text-center">
          Describe the Scene
        </h2>
      </>
      <ul
        role="list"
        className="grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
      >
        {examPictures.describeScenes.map((scene, index) => (
          <li key={index} className={`relative ${index === 4 && "col-span-2"}`}>
            <div className="group overflow-hidden rounded-lg focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600">
              <Image
                alt={scene.alt}
                src={scene.src}
                className="pointer-events-none mx-auto rounded-lg object-contain outline -outline-offset-1 outline-black/30 group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-hidden"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-red-950"
                />
                <div
                  className={`relative mx-auto mt-2 w-80 rounded-lg border-transparen ${
                    index === 4 && "w-112"
                  }`}
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Describe the Scene"
                    className="peer block w-full rounded-lg bg-gray-50 px-3 py-1.5 text-red-950 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {backToTop}
    </Card>
  );

  const shortResponse = (
    <Card>
      <>
        <h2 id="short-response" className="mb-6 text-2xl text-center">
          Short Response
        </h2>
      </>
      {shortResponseOptions.map((option, index) => (
        <div key={index}>
          <label
            htmlFor="about"
            className="block text-xl font-medium text-red-950 "
          >
            {option}
          </label>
          <div className="mt-2 mb-8">
            <textarea
              id="about"
              name="about"
              rows={4}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base  text-red-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
              defaultValue={""}
              onChange={(e) => {
                setExam({
                  ...exam,
                  describeScene: {
                    ...exam.describeScene,
                    [index]: {
                      ...exam.describeScene[index],
                      answer: e.target.value,
                    },
                  },
                });
              }}
            />
          </div>
        </div>
      ))}
      {backToTop}
    </Card>
  );

  const examCompletion = (
    <Card>
      <>
        <h2 className="mb-6 text-2xl text-center">Thank you / Gracias</h2>
      </>
      <div className="text-center">
        Please click the submit button to complete your exam.
        <br /> You should hear back from me within 72 hours with your results
        and placemnet recommendation.
      </div>
      <Button
        className="flex justify-center mx-auto mt-8 p-4 w-3xs border border-2 rounded-lg"
        onClick={() => console.log(exam)}
      >
        {dot}
        Submit Exam
        {dot}
      </Button>
    </Card>
  );

  return (
    <>
      {examHeader}
      {describePicture}
      {multipleChoice}
      {describeScene}
      {shortResponse}
      {examCompletion}
    </>
  );
}
