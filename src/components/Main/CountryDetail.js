import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchCountry } from "../../hooks/useFetchCountry";
import { BackButton, DetailCountryContainer, TextDetailContainer, FlagImageContainer, BorderCardContainer, FlexTextContainer } from "./Main.style";

export const CountryDetail = () => {
  const { id } = useParams();
  const [country, loading, error] = useFetchCountry(id);

  return (
    <div>
      {Object.keys(country).length === 0 ? null : (
        <>
          <Link to={"/"}>
            <BackButton>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </BackButton>
          </Link>
          <DetailCountryContainer>
            <FlagImageContainer>
              <img src={country.flag} alt={country.name} />
            </FlagImageContainer>
            <TextDetailContainer>
              <h3>{country.name}</h3>
              <FlexTextContainer>
                <div>
                  <p>
                    <b>Native Name: </b>
                    {country.nativeName}
                  </p>
                  <p>
                    <b>Population: </b>
                    {country.population}
                  </p>
                  <p>
                    <b>Region: </b>
                    {country.region}
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    {country.subregion}
                  </p>
                  <p>
                    <b>Capital: </b>
                    {country.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Top Level Domain: </b>
                    {country.topLevelDomain}
                  </p>
                  <p>
                    <b>Currencies: </b>
                    {country.currencies}
                  </p>
                  <p>
                    <b>Languages: </b>
                    {country.languages}
                  </p>
                </div>
              </FlexTextContainer>
              <div>
                <h4>Border Countries:</h4>
                <BorderCardContainer>
                  {country.borders.map((border) => (
                    <p key={border}>{border}</p>
                  ))}
                </BorderCardContainer>
              </div>
            </TextDetailContainer>
          </DetailCountryContainer>
        </>
      )}
      {loading && <p>Loading ....</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
