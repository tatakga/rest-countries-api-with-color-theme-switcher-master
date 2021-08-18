import React from "react";
import { Container } from "../../styles/globalStyles";
import { Countries } from "./Countries";
import { Section } from "./Main.style";
import { Switch, Route } from "react-router-dom";
import { CountryDetail } from "./CountryDetail";

const Main = () => {
  return (
    <main>
      <Section>
        <Container>
          <Switch>
            <Route path="/" exact>
              <Countries />
            </Route>
            <Route path="/:id">
              <CountryDetail />
            </Route>
          </Switch>
        </Container>
      </Section>
    </main>
  );
};
export default Main;
