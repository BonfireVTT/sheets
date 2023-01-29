import styled from 'styled-components';

const Container = styled.div`
  align-items: flex-start;
  display: inline-flex;
  padding: 0.5em;
`;

interface Props {
  width: number;
}

const Col = styled.div<Props>`
  width: ${({ width }) => `${width}%`};
`;

const Effect = styled.span`
  color: var(--grey);
  font-size: var(--font-size-sm);
`;

export default {
  Col,
  Container,
  Effect,
};
