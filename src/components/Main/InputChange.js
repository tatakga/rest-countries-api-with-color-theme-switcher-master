import React from "react";
import { InputChangeContainer } from "./Main.style";

const InputChange = ({ search, setSearch, region, setRegion }) => {
  return (
    <InputChangeContainer>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setRegion("all");
          }}
          placeholder="Search for a country..."
        />
      </div>
      <select
        value={region}
        onChange={(e) => {
          setRegion(e.target.value);
          setSearch("");
        }}
      >
        <option value="all" disabled>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </InputChangeContainer>
  );
};

export default InputChange;
