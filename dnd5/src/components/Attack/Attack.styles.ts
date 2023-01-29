import styled from 'styled-components';

const Container = styled.article`
  background: var(--dark-transparent);
  border-radius: 0.3em;
  display: inline-flex;
  padding: 0.5em 1em;;
  width: 100%;
  align-items: center;
`;

interface Props {
  width?: number;
}

const Group = styled.div<Props>`
  display: flex;
  padding-left: 1em;
  width: ${({ width }) => (width ? `${width}%` : 'auto')};

  &:first-of-type {
    padding-left: 0;
  }
`;

const Detail = styled.div`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-thin);
  text-transform: capitalize;
`;

const Label = styled.div`
  font-weight: var(--font-weight-bold);
`;

const Range = styled.div`
  font-size: var(--font-size-sm);
`;

export default {
  Container,
  Detail,
  Group,
  Label,
  Range,
};
