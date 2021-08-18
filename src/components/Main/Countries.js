import React, { useState } from "react";
import InputChange from "./InputChange";
import { useFetchCoutries } from "../../hooks/useFetchCoutries";
import { CountriesCard } from "./CountriesCard";
import { CardContainer, MessageText } from "./Main.style";

export const Countries = () => {
  const [region, setRegion] = useState("all");
  const [search, setSearch] = useState("");
  const [countries, loading, error] = useFetchCoutries(region, search);

  return (
    <>
      <InputChange search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
      <CardContainer>{countries.length > 0 ? countries.map((country) => <CountriesCard key={country.alpha3Code} {...country} />) : null}</CardContainer>
      {loading && <MessageText type="loading">Loading ...</MessageText>}
      {error && <MessageText type="error">{error}</MessageText>}
    </>
  );
};
