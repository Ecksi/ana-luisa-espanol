import Card from "../components/card";

const schedule = [
  [
    { english: "Monday", spanish: "Lunes", type: "days" },
    { english: "Tuesday", spanish: "Martes", type: "days" },
    { english: "Wednesday", spanish: "Miercoles", type: "days" },
    { english: "Thursday", spanish: "Jueves", type: "days" },
    { english: "Friday", spanish: "Viernes", type: "days" },
  ],
  [
    { name: "Beginner 2", value: "09:00", type: "hours" },
    { name: "Advanced 3", value: "09:00", type: "hours" },
    { name: "Beginner 2", value: "09:00", type: "hours" },
    { name: "Advanced 3", value: "09:00", type: "hours" },
    { name: "Intermediate 1", value: "09:00", type: "hours" },
  ],
  [
    { name: "Beginner 1", value: "10:30", type: "hours" },
    { name: "Intermediate 3", value: "10:30", type: "hours" },
    { name: "Intermediate 1", value: "10:30", type: "hours" },
    { name: "Beginner 1", value: "10:30", type: "hours" },
    { name: "Intermediate 3", value: "10:30", type: "hours" },
  ],
  [
    { name: "Intermediate 4", value: "12:00", type: "hours" },
    { name: "Intermediate 2", value: "12:00", type: "hours" },
    { name: "Advanced 1", value: "12:00", type: "hours" },
    { name: "Intermediate 4", value: "12:00", type: "hours" },
    { name: "Intermediate 2", value: "12:00", type: "hours" },
  ],
  [
    { name: "Beginner 1", value: "13:30", type: "hours" },
    { name: "Intermediate 3", value: "13:30", type: "hours" },
    { name: "", value: "", type: "hours" },
    { name: "Beginner 1", value: "13:30", type: "hours" },
    { name: "", value: "", type: "hours" },
  ],
] as const;

export default function Schedule() {
  return (
    <>
      <Card>
        <h2 className="text-amber-950 font-bold text-2xl text-center">
          Schedule for: January 5th - February 13th
        </h2>
      </Card>
      <Card>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-1 bg-rope sm:grid-cols-2 lg:grid-cols-5">
            {schedule.map((blocks, scheduleIndex) =>
              blocks.map((block, blockIndex) => (
                <div
                  key={"days-" + scheduleIndex + "block-" + blockIndex}
                  className={`flex space-between bg-camel px-4 py-6 sm:px-6 lg:px-8 ${
                    block.type === "days" && "border-rope border-b-4"
                  }`}
                >
                  <div className="flex-2">
                    <p
                      key={"blockTop-" + blockIndex}
                      className="text-sm/6 font-medium text-red-950"
                    >
                      {block.type === "days" ? block.english : block.name}
                    </p>
                    <p
                      key={"blockBot-" + blockIndex}
                      className="mt-2 flex items-baseline gap-x-2"
                    >
                      <span className="text-4xl font-semibold tracking-tight text-red-950">
                        {block.type === "days" ? block.spanish : block.value}
                      </span>
                    </p>
                  </div>
                  {/* Possible addition for more clarity on finding your class. */}
                  {/* <div
                  className={`flex flex-1 justify-center items-center w-full ${
                    (block.type === "days" && "hidden") ||
                    (block.type === "hours" && block.name === "" && "hidden")
                  }`}
                >
                  <h1 className="text-center pt-1 text-xl font-bold border-2 border-rope rounded-full h-10 w-10">
                    {block.type === "hours" &&
                      block.name[0] + block.name.slice(-1)}
                  </h1>
                </div> */}
                </div>
              ))
            )}
          </div>
        </div>
      </Card>
    </>
  );
}
