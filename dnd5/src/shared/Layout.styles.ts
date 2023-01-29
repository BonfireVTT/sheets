import styled, { css } from 'styled-components';

interface GroupProps {
  isRow?: boolean;
  isFullHeight?: boolean;
}

const FullHeight = css`
  align-items: center;
  height: 100%;
`;

const Group = styled.article<GroupProps>`
  background: var(--dark-transparent);
  border-radius: 0.3em;
  display: flex;
  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column')};
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5em;

  ${({ isFullHeight }) => isFullHeight && FullHeight};
`;

const Heading = styled.h2`
  color: var(--grey);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  margin-bottom: 1em;
  text-align: center;
  text-transform: uppercase;
  transform: scaleX(90%);
  width: 100%;
`;

interface ColProps {
  width: number;
}

const Col = styled.div<ColProps>`
  display: flex;
  width: ${({ width }) => `${width}%`};
`;

export default {
  Col,
  Group,
  Heading,
};
