import { CompressedTextStyle } from '@shared/Text.styles';
import {
  TabList as ReactTabList, Tab as ReactTab,
} from 'react-tabs';
import styled from 'styled-components';

export const TabList = styled(ReactTabList)`
  display: inline-flex;
  margin: 0.5em 0;
`;

export const Tab = styled(ReactTab).attrs({ selectedClassName: 'selected' })`
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  padding: 0.3em 0.5em;
  text-transform: uppercase;
  
  ${() => CompressedTextStyle};

  &.selected {
    color: black;
    background: var(--accent);
  }
`;
