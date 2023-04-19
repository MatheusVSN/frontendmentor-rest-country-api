const abortController = new AbortController();
import { useState, useEffect } from "react";

export default function CallCountriesAPI() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((response) => {
      if (response.status != 200) {
        return;
      }
      return response.json();
    }).then((data) => {
        abortController.abort();
        setCountries(data);
        setLoading(false);
    });
  }, []);

    return { countries, loading };
}
