import { useState } from "react";

import SearchComponent from "./filter/search";
import CountriesList from "./list/countries";

export default function Main() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  return (
    <main>
      <SearchComponent />
      <CountriesList />
    </main>
  );
}
