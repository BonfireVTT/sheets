import { CompressedTextStyle } from '@shared/Text.styles';
import styled, { css } from 'styled-components';

const Container = styled.section``;

const Header = styled.div`
  display: inline-flex;
  margin-bottom: 0.25em;
  position: relative;
  width: 100%;
`;

const Label = styled.div`
  cursor: pointer;
  display: inline-flex;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  user-select: none;

  ${() => CompressedTextStyle};
`;

interface Props {
  isOpen?: boolean;
}

const OpenIndicatorOpen = css`
  transform: rotate(180deg) scale(80%);
`;

const OpenIndicator = styled.span<Props>`
  margin-right: 0.3em;
  transform: rotate(90deg) scale(80%);

  ${({ isOpen }) => isOpen && OpenIndicatorOpen}
`;

const Spells = styled.div`
  background: var(--dark-transparent);
  border-top: 1px solid var(--accent-light);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const NoSpell = styled.div`
  color: var(--grey);
  font-size: var(--font-size-sm);
  margin: 0.5em 0;
  text-align: center;
  width: 100%;
`;

export default {
  Container,
  Header,
  Label,
  NoSpell,
  OpenIndicator,
  Spells,
};
