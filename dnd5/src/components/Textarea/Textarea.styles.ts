import styled from 'styled-components';

const Container = styled.div``;

const Label = styled.div`
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  font-size: var(--font-size-sm);
`;

const Textarea = styled.textarea`
  background: var(--primary-light);
  border-radius: 0.2em;
  padding: 0.3em;
  pointer-events: all;
  resize: none;
  width: 100%;

  &:disabled {
    background: var(--primary-dark);
  }
`;

export default {
  Container,
  Label,
  Textarea,
};
