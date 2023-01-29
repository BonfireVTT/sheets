/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

export const CompressedTextStyle = css`
  transform-origin: left;
  transform: scaleX(90%);

  &.text-center {
    transform-origin: center;
  }

  &.text-right {
    transform-origin: right;
  }
`;
