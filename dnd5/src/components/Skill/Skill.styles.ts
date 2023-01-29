import { CompressedTextStyle } from '@shared/Text.styles';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.3em;

  &:last-child {
    margin-bottom: 0;
  }

  & > * + * {
    margin-left: 0.7em;
  }
`;

interface Props {
  isInvalid: boolean;
}

const Bonus = styled.input<Props>`
  appearance: none;
  background: var(--primary-light);
  border-radius: 0.2em;
  border: 2px solid transparent;
  border-color: ${({ isInvalid }) => (isInvalid ? 'var(--error)' : 'transparent')};
  color: white;
  font-weight: var(--font-weight-regular);
  text-align: center;
  width: 35px;

  &:disabled {
    background: var(--primary-dark);
  }
`;

const Label = styled.div`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex-grow: 1;
  font-weight: var(--font-weight-regular);
  text-transform: capitalize;
  user-select: none;

  span {
    ${() => CompressedTextStyle};
  }
`;

const Ability = styled.div`
  color: var(--grey);
  font-size: var(--font-size-sm);
  margin-right: 10px;
  text-transform: uppercase;
  width: 30px;
`;

export default {
  Ability,
  Bonus,
  Container,
  Label,
};
