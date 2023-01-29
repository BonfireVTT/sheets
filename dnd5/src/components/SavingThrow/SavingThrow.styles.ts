import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: inline-flex;
  flex-wrap: nowrap;
  width: calc(50% - 0.3em);

  &:nth-child(even) {
    margin-right: 0.15em;
  }

  &:nth-child(odd) {
    margin-left: 0.15em;
  }
`;

export default {
  Container,
};
