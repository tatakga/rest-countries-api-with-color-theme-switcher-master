import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia } from "./Main.style";

export const CountriesCard = ({ alpha3Code, flag, name, population, region, capital }) => {
  return (
    <Link to={`/${alpha3Code}`}>
      <Card>
        <CardMedia bgUrl={flag} />
        <CardContent>
          <h3>{name}</h3>
          <p>
            <b>Population: </b>
            {population}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
