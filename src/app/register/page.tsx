"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Card from "../components/card";

const availableClasses = [
  "Beginner 1",
  "Beginner 2",
  "Beginner 3",
  "Intermediate 1",
  "Intermediate 2",
  "Intermediate 3",
  "Intermediate 4",
  "Advanced 1",
  "Advanced 2",
];

export default function Register() {
  return (
    <Card>
      <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-red-950">
            Register for a class
          </h2>
          <div className="mt-4 p-2 flex flex-col gap-4 text-red-950 border-t-4 border-b-4 border-rope text-center text-xl">
            <span>
              Please enter your name, email, and course option to register for a
              class.
            </span>
            <span>I look forward to seeing you in class</span>
          </div>
        </div>
        {/* Full Name / Email / Course */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-2">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-red-950"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-red-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-red-950"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-red-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
            </div>

            {/* <div className="mb-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-red-950"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-red-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5  dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
            </div> */}

            <div className="mb-6">
              <label
                htmlFor="location"
                className="block text-sm/6 font-medium text-red-950"
              >
                Location
              </label>
              <div className="grid grid-cols-1 mt-2">
                <select
                  id="location"
                  name="location"
                  defaultValue="Canada"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-red-950 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:outline-white/10 dark:focus-visible:outline-indigo-500"
                >
                  {availableClasses.map((availableClass, index) => (
                    <option key={index}>{availableClass}</option>
                  ))}
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-red-950 sm:size-4"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-rope px-3 py-1.5 text-sm/6 font-semibold text-avena shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
}
