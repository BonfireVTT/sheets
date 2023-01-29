import styled from 'styled-components';

const Container = styled.section`
  & > * + * {
    margin-top: 0.5em;
  }
`;

const Controls = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin: 0 0 0.5em 0;
  width: 100%;
`;

export default {
  Container,
  Controls,
};
