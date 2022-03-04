import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faCompactDisc, faRecordVinyl, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean,
  name: string,
}

const Format: React.FC<Props> = ({handleChange, checked, name}) => {
  const getIcon = (name: string) => {
    switch(name) { 
      case "Digital": { 
        return faMusic
      } 
      case "CD": { 
        return faCompactDisc
      }
      case "Vinyl": { 
        return faRecordVinyl;
      }
      default: { 
        return faMusic;
      } 
    } 
  }

  return (
    <div className={`relative flex-1 xl:flex-none flex flex-col items-center gap-2 px-6 sm:px-14 py-4 border shadow ${checked ? "bg-indigo-50 border-indigo-300 shadow-inner-indigo-300" : "border-gray-300 shadow-inner-gray-300"} rounded-lg`}>
      <FontAwesomeIcon icon={getIcon(name)} className={`text-5xl ${checked ? "text-indigo-600" : "text-gray-600"}`} />
      <p className={`text-md font-semibold ${checked ? "text-indigo-900" : "text-gray-700"}`}>{name}</p>
      <FontAwesomeIcon icon={checked ? faSquareCheck : faSquare} className={`text-2xl ${checked ? "text-indigo-600" : "text-gray-300"}`} />
      <label htmlFor={name.toLowerCase()} className="absolute h-full w-full cursor-pointer">
        <input
          id={name.toLowerCase()}
          type="checkbox" 
          name={name.toLowerCase()}
          onChange={handleChange}
          checked={checked}
        />
      </label>
    </div>
  )
};

export default Format;

