import { useEffect, useState } from "react";

let URL = "https://restcountries.eu/rest/v2/all";

export const useFetchCoutries = (selectedRegion, countryQuery) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (selectedRegion !== "all") {
    URL = "https://restcountries.eu/rest/v2/region/" + selectedRegion;
  }
  if (countryQuery !== "") {
    URL = "https://restcountries.eu/rest/v2/name/" + countryQuery;
  }
  useEffect(() => {
    const myAbortController = new AbortController();
    setLoading(true);
    setError("");
    const getCoutries = async () => {
      try {
        const response = await fetch(URL, { signal: myAbortController.signal });
        if (!response.ok) {
          throw Error(`Can't fetch data`);
        }
        const datas = await response.json();
        setLoading(false);
        setError("");
        setState([
          ...datas.slice(0, 1).map((data) => {
            return {
              alpha3Code: data["alpha3Code"],
              name: data["name"],
              flag: data["flag"],
              population: data["population"],
              region: data["region"],
              capital: data["capital"],
            };
          }),
        ]);
      } catch (error) {
        setState([]);
        setLoading(false);
        setError(error.message);
      }
    };

    getCoutries();

    return () => {
      myAbortController.abort();
    };
  }, [selectedRegion, countryQuery]);

  return [state, loading, error];
};
