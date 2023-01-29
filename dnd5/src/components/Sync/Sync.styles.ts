import styled from 'styled-components';

const Container = styled.section`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

const LastSync = styled.span`
  color: var(--grey);
  font-size: var(--font-size-sm);
`;

const Styles = {
  Container,
  LastSync,
};

export default Styles;
