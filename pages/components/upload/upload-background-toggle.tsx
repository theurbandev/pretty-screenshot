import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import UploadSection from "./upload-section";

const backgroundsList = [
  {
    name: "Startup",
    image: "gradient1",
  },
  {
    name: "Business",
    image: "gradient2",
  },
  {
    name: "Enterprise",
    image: "gradient3",
  },
];

export default function BackgroundToggle() {
  const [selected, setSelected] = useState(backgroundsList[0]);

  const updateBackground = () => {
    console.log("working..");
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={selected}
          onChange={setSelected}
          onClick={updateBackground}
        >
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="flex justify-center gap-3">
            {backgroundsList.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2"
                      : ""
                  }
                  ${checked ? "text-white" : ""}
                    relative flex cursor-pointer rounded-lg px-5 py-3 focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Description
                            className={`inline ${
                              checked ? "text-sky-100" : "text-white-500"
                            }`}
                          >
                            <img src={"../" + plan.image + ".jpg"} alt="" />
                          </RadioGroup.Description>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}