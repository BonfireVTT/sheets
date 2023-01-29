import styled from 'styled-components';

const Container = styled.div`
  align-self: start;
  display: inline-flex;
  flex-wrap: nowrap;
  margin: 0.5em 0;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  background: 0;
  width: 32px;
  height: 32px;
  text-align: center;
  position: absolute;
  left: -15px;
  top: 0;
  z-index: 2;
  font-size: var(--font-size-md);

  &:focus {
    outline: 0;
  }
`;

const Label = styled.label`
  border: 3px double var(--accent-light);
  display: flex;
  flex-grow: 1;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  height: 32px;
  line-height: 28px;
  padding: 0 0.75em 0 2em;
  text-transform: uppercase;

  &:focus-within {
    &::after {
      box-shadow: 0 0 10px var(--accent-light);
    }
  }

  &::after {
    content: "";
    border: 3px double var(--accent-light);
    width: 32px;
    height: 32px;
    z-index: -1;
    position: absolute;
    left: -15px;
    top: 0;
    transform: rotate(45deg);
    background: #19191e;
    z-index: 1;
  }
`;

export default {
  Container,
  Input,
  Label,
};
