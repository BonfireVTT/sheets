import { CompressedTextStyle } from '@shared/Text.styles';
import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  background: var(--primary);
  border-radius: 0.4em;
  border: 2px solid var(--primary-light);
  cursor: pointer;
  display: inline-flex;
  font-weight: var(--font-weight-bold);
  justify-content: left;
  padding: 0.2em 0.4em;
  width: 100%;

  &:hover {
    border-color: var(--accent-light);
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    ${CompressedTextStyle};
  }
`;

const Icon = styled.img`
  height: 14px;
  margin: 0 6px 0 0;
  width: 14px;
`;

const Styles = {
  Container,
  Icon,
};

export default Styles;
