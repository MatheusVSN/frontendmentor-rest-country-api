import { BiSearch } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";

import { useState } from "react";
interface Region {
  value: string;
  label: string;
}

const RegionsList: Region[] = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export default function SearchComponent({
  onRegionChange,
  onQueryChange,
}: {
  onRegionChange: (value: string) => void;
  onQueryChange: (value: string) => void;
}) {
  function onFilterChange(value: string) {
    onRegionChange(value);
  }

  function onSearchInput(value: string) {
    onQueryChange(value);
  }

  return (
    <div className="mt-8 px-8 flex max-lg:flex-col gap-y-12">
      {/* Search bar */}
      <div className="flex items-center gap-x-4 bg-white dark:bg-very-dark-blue drop-shadow-md h-14 rounded-md px-8 md:w-[500px]">
        <BiSearch />
        <input
          onChange={(e) => onSearchInput(e.target.value)}
          className="bg-transparent h-full w-full outline-none"
          placeholder="Search for a country..."
        ></input>
      </div>

      {/* Region filter */}
      <div className="h-14 w-64 bg-white dark:bg-very-dark-blue drop-shadow-md flex items-center rounded-md lg:ml-auto">
        <select
          defaultValue=""
          onChange={(e) => onFilterChange(e.target.value)}
          id="region"
          className="appearance-none bg-white dark:bg-very-dark-blue w-full h-full px-4 rounded-md outline-none"
        >
          <option value="" disabled hidden>
            Filter by region
          </option>
          {RegionsList.map((region) => {
            return (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            );
          })}
        </select>

        <RiArrowDownSLine className="w-6 h-6 absolute right-4" />
      </div>
    </div>
  );
}
