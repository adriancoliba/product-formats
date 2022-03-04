import React, { useState } from "react";
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

  return (
    <div className="flex-1 block xl:flex h-full max-w-4xl bg-white shadow rounded-lg">
      <div className="p-3 sm:p-6 sm:pr-0">
        <p className="text-xl font-semibold">Formats</p>
        <p className="text-md text-gray-500">Select all the formats this product and tracklisting will be released on.</p>
      </div>
      <div className="xl:min-w-[65%] flex items-center justify-evenly gap-3 px-3 pb-3 sm:gap-6 sm:px-6 sm:pb-6 xl:gap-0.5 xl:px-0 xl:pb-0">
        <Format handleChange={handleChange} checked={selections.digital} name="Digital" />
        <Format handleChange={handleChange} checked={selections.cd} name="CD" />
        <Format handleChange={handleChange} checked={selections.vinyl} name="Vinyl" />
      </div>
    </div>
  );
}

export default Formats;


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

{/* <FontAwesomeIcon icon={faCircleXmark} className={`text-2xl`} /> */}

