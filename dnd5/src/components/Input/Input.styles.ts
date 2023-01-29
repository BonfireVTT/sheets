import styled from 'styled-components';

interface LabelProps {
  isActive?: boolean;
}

const Label = styled.label<LabelProps>`
  text-align: left;
  transform-origin: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    font-size: var(--font-size-sm);
  }

  input {
    background: var(--primary);
    border: 1px solid var(--primary-light);
    border-radius: 0.2em;
    padding: 0.25em 0.4em;

    width: 100%;
  }
`;

const Container = styled.div`
  border-radius: 6px;
  position: relative;
`;

export default {
  Container,
  Label,
};
