import styled, { css } from 'styled-components';
import { CompressedTextStyle } from './Text.styles';

interface Props {
  appearance?: 'ghost';
  size?: 'large';
}

const ButtonGhostStyle = css`
  background: none;
  color: white;

  &:focus,
  &:hover {
    background: none;
  }
`;

const ButtonLargeStyle = css`
  font-size: var(--font-size-md);
`;

const Button = styled.button<Props>`
  background: var(--accent);
  border-radius: 0.1em;
  color: black;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  padding: 0.4em;
  text-transform: uppercase;

  ${() => CompressedTextStyle};

  &:focus,
  &:hover {
    background: var(--accent-light);
  }

  &:disabled {
    opacity: 0.7;
  }

  ${({ size }) => size === 'large' && ButtonLargeStyle};
  ${({ appearance }) => appearance === 'ghost' && ButtonGhostStyle};
`;

export default Button;
