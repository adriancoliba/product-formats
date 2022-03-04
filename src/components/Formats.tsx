import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Format } from "./";

function Formats() {
  interface Selections {
    digital: boolean;
    cd: boolean;
    vinyl: boolean;
  }
  
  const [selections, setSelections] = useState<Selections>({ digital: false, cd: false, vinyl: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelections({...selections, [name]: checked})
  }

  const isError = Object.values(selections).every((v) => v === false)

  return (
    <div className="flex-1 block xl:flex max-w-4xl bg-white shadow rounded-lg p-3 sm:p-6 xl:pr-6">
      <div className="pb-6 sm:pr-0">
        <p className="text-xl font-semibold">Formats</p>
        <p className="text-md text-gray-500">Select all the formats this product and tracklisting will be released on.</p>
      </div>
      <div className="xl:min-w-[66%]">
        <div className="flex items-center justify-between gap-3 sm:gap-6 xl:gap-0">
          <Format handleChange={handleChange} checked={selections.digital} name="Digital" />
          <Format handleChange={handleChange} checked={selections.cd} name="CD" />
          <Format handleChange={handleChange} checked={selections.vinyl} name="Vinyl" />
        </div>
        {isError && (
          <div className="flex items-center w-auto mt-2 p-3 xl:p-2 bg-red-50 rounded-lg gap-3 xl:gap-1">
            <FontAwesomeIcon icon={faCircleXmark} className={`text-md text-red-400`} />
            <p className="text-red-800 font-medium">This is an error message that appears when there are 0 formats selected</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Formats;