import styled from 'styled-components';

interface Props {
  isDanger?: boolean;
}

const Input = styled.input<Props>`
  background: none;
  border-bottom: 2px double var(--accent-light);
  color: ${({ isDanger }) => (isDanger ? 'var(--danger)' : 'white')};
  font-size: var(--font-size-xl);
  padding: 0.25em 0;
  text-align: center;
  width: 70px;
`;

const Separator = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--font-size-xl);
  justify-content: center;
  width: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &:before,
  &:after {
    content: "";
    height: 6px;
    width: 2px;
    background-color: var(--accent-light);
    bottom: 0;
  }

  &:before {
    position: absolute;
    left: 0;
  }

  &:after {
    position: absolute;
    right: 0;
  }
`;

const Label = styled.label`
  color: var(--grey);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  text-align: center;
  text-transform: uppercase;
  transform: scaleX(90%);
  width: 100%;
`;

export default {
  Input,
  Separator,
  InputGroup,
  Label,
};
