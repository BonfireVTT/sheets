import styled from 'styled-components';

const Container = styled.section`
  position: relative;
`;

const Input = styled.input.attrs({ type: 'number' })`
  background: var(--primary-light);
  border-radius: 0.2em;
  width: 60px;
  padding: 0.1em 0.3em 0.1em 1.4em;
`;

interface Props {
  color: string;
}

const Icon = styled.div<Props>`
  align-items: center;
  background: ${({ color }) => color};
  border-radius: 100%;
  display: flex;
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  height: 14px;
  justify-content: center;
  left: 3px;
  position: absolute;
  top: 6px;
  width: 14px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
`;

const Styles = {
  Container,
  Icon,
  Input,
};

export default Styles;
