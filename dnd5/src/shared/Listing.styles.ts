/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { CompressedTextStyle } from './Text.styles';

export const ListingHeader = styled.div`
  color: var(--grey);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  padding: 0.5em;
  text-transform: uppercase;
  width: 100%;
  
  & > div {
    ${() => CompressedTextStyle};
  }
`;
