import { BiSearch } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";

interface Region {
    value: string;
    label: string;
}

const RegionsList: Region[] = [
    {value: "africa", label: "Africa"},
    {value: "america", label: "Americas"},
    {value: "asia", label: "Asia"},
    {value: "europe", label: "Europe"},
    {value: "oceania", label: "Oceania"},
]

export default function SearchComponent() {
  return (
    <div className="mt-8 px-8 flex max-md:flex-col gap-y-12">
      {/* Search bar */}
      <div className="flex items-center gap-x-4 bg-white dark:bg-very-dark-blue drop-shadow-md h-14 rounded-md px-8 md:w-[500px]">
        <BiSearch />
        <input
          className="bg-transparent h-full w-full outline-none"
          placeholder="Search for a country..."
        ></input>
      </div>

      {/* Region filter */}
      <div className="h-14 w-64 bg-white dark:bg-very-dark-blue drop-shadow-md flex items-center rounded-md md:ml-auto">
        <select defaultValue="" id="region" className="appearance-none bg-white dark:bg-very-dark-blue w-full h-full px-4 rounded-md outline-none">
          <option value="" disabled hidden>
            Filter by region
          </option>
          {RegionsList.map((region) => {
            return <option key={region.value} value={region.value}>{region.label}</option>
          })}
        </select>

        <RiArrowDownSLine className="w-6 h-6 absolute right-4"/>
      </div>
    </div>
  );
}
