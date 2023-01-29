import { CompressedTextStyle } from '@shared/Text.styles';
import styled from 'styled-components';

const Container = styled.div`
  align-items: baseline;
  cursor: help;
  display: inline-flex;
`;

const Icon = styled.img`
  height: 10px;
  margin-right: 4px;
  width: auto;
`;

const Text = styled.span`
  text-transform: uppercase;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);

  ${() => CompressedTextStyle};
`;

const Styles = {
  Container,
  Icon,
  Text,
};

export default Styles;
