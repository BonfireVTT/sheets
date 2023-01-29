import styled from 'styled-components';

interface Props {
  squared?: boolean;
}

const Summary = styled.span<Props>`
  align-items: center;
  background: var(--primary-dark);
  border-radius: ${({ squared }) => (squared ? '0' : '100%')};
  border: 3px double var(--accent-light);
  display: flex;
  font-weight: var(--font-weight-bold);
  height: 35px;
  justify-content: center;
  margin-left: 0.3em;
  width: 35px;
  z-index: 1;
`;

export default Summary;
