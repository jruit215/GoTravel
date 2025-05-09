import { useState } from "react";
import { locations } from "../../utils/content";
import CaretUp from "../Icons/CaretUp";
import Location from "./Location";
import { LOCATION_CARDS_SHOWN } from "../../utils/constants";

export default function ExploreMore() {
const [currIndex, setCurrIndex] = useState<number>(0);

const totalLocations = locations.length;
const renderLocations = locations.slice(
    currIndex, 
    currIndex + LOCATION_CARDS_SHOWN
  );

const handleRightClick = () => setCurrIndex((prevIndex) => prevIndex + 1);
const handleLeftClick = () => setCurrIndex((prevIndex) => prevIndex - 1);

  return (
    <section className="px-24 py-26 bg-primary-100/30" id="ExploreMore">
      <div className="m-auto max-w-389">
        <div className="flex items-end justify-between">
            <div>
                <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">Explore More</h2>
                <p className="tracking-6 text-grey-700 text-[1.75rem] font-light">Let's go on an adventure!</p>
            </div>

            <div className="mb-2 flex gap-x-6">
                <button 
                  className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="arrow left"
                  onClick={handleLeftClick}
                  disabled={currIndex == 0}
                  >
                    <CaretUp className="w-6 -rotate-90 fill-white"/>
                </button>
                <button 
                  className="bg-primary-700 not-disabled:hover:bg-grey-800 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50" 
                  aria-label="arrow right"
                  onClick={handleRightClick}
                  disabled={currIndex >= totalLocations - LOCATION_CARDS_SHOWN}
                  >
                    <CaretUp className="w-6 rotate-90 fill-white"/>
                </button>
            </div>
        </div>

        <ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24">
          {renderLocations.map((location) => ( 
            <Location location={location} key={location.id}/> 
          ))}
        </ul>
      </div> 
    </section>
  );
}
