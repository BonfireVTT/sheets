import styled from 'styled-components';

const Container = styled.main`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: auto auto auto auto auto auto;
  gap: 0.5em; 
  grid-template-areas:
    "meta meta"
    "character character"
    "health defenses"
    "abilities abilities"
    "tabs tabs";
`;

const Meta = styled.section`
  grid-area: meta;
`;

const Character = styled.section`
  grid-area: character;
`;

const Health = styled.section`
  grid-area: health;
`;

const Defenses = styled.section`
  grid-area: defenses;
`;

const Abilities = styled.section`
  grid-area: abilities;
`;

const Tabs = styled.section`
  grid-area: tabs;
`;

export default {
  Abilities,
  Character,
  Container,
  Defenses,
  Health,
  Meta,
  Tabs,
};
