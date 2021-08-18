import { useState, useEffect } from "react";

const URL = "https://restcountries.eu/rest/v2/alpha/";

export const useFetchCountry = (id) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const myAbortController = new AbortController();
    setLoading(true);
    setError("");

    const getCoutry = async () => {
      try {
        const response = await fetch(URL + id, { signal: myAbortController.signal });
        if (!response.ok) {
          throw Error(`Can't fetch data`);
        }
        const data = await response.json();
        const currenciesName = data.currencies
          .map((item) => {
            return [item.name];
          })
          .join(", ");
        const languageName = data.languages
          .map((item) => {
            return [item.name];
          })
          .join(", ");
        setLoading(false);
        setError("");
        setState({
          flag: data.flag,
          name: data.name,
          nativeName: data.nativeName,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          topLevelDomain: data.topLevelDomain,
          currencies: currenciesName,
          languages: languageName,
          borders: data.borders,
        });
      } catch (error) {
        setState({});
        setLoading(false);
        setError(error.message);
      }
    };

    getCoutry();

    return () => {
      myAbortController.abort();
    };
  }, [id]);

  return [state, loading, error];
};
