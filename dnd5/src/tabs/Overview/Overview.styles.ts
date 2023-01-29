import styled from 'styled-components';

const Container = styled.div`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: auto auto;
  gap: 0.5em; 
  grid-template-areas:
    "skills overview"
    "skills overview"
`;

const Skills = styled.div`
  grid-area: skills;
`;

const Overview = styled.div`
  grid-area: overview;

  & > * + * {
    margin-top: 0.5em;
  }
`;

export default {
  Container,
  Skills,
  Overview,
};
