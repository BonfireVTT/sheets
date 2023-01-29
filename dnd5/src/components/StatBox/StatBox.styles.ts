import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: nowrap;
  margin: 0.25em 0;
`;

const Label = styled.span`
  border-radius: 0 2em 2em 0;
  border: 3px double var(--accent-light);
  height: 35px;
  line-height: 31px;
  margin-left: calc(35px / 2 * -1);
  padding: 0 1em 0 calc(35px / 2 + 0.5em);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  font-size: var(--font-size-sm);
  flex-grow: 1;
`;

export default {
  Container,
  Label,
};
