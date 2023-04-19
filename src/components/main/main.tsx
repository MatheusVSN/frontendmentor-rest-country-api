import { useState } from "react";

import SearchComponent from "./filter/search";
import CountriesList from "./list/countries";

import CallCountriesAPI from "@/hooks/request-countries";

export default function Main() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const { countries, loading }: {countries: any, loading:boolean} = CallCountriesAPI();

  function onRegionChange(region: string) {
    setRegion(region);
  }

  function onQueryChange(value: string) {
    setQuery(value);
  }

  return (
    <main>
      <SearchComponent onRegionChange={(value: string) => onRegionChange(value)} onQueryChange={(value: string) => onQueryChange(value)} />
      <CountriesList countries={countries} loading={loading} query={query} region={region} />
    </main>
  );
}
