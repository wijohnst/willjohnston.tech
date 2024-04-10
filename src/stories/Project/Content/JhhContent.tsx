import * as React from 'react';
import { ContentWrapper, P, Quote } from './Content.style';

type Props = {};
const JhhContent = ({}: Props): React.ReactElement => {
  return (
    <ContentWrapper>
      <P>
        One of my core principles for software development is the idea that:
      </P>
      <Quote>Great software solves real problems.</Quote>
      <P>
        After the birth of our first son, my wife and I were on opposite
        schedules, with one of us sleeping while the other took care of the
        baby. We needed a way to coordinate our day-to-day life and manage the
        many facets of running a household. Out of this very real need The
        Johnston Home Hub was born.
      </P>
      <P>
        A Node / Express / MongoDB backend serves a React / TypeScript frontend
        in this full stack web application. Features include, meal planner,
        shopping lists, recipe and pantry organizers, and a widget for making
        sure the pets get fed.
      </P>
    </ContentWrapper>
  );
};

export default JhhContent;
