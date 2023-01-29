import styled from 'styled-components';

const Container = styled.section`
  background: var(--primary-light);
  border-radius: 0.2em;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  display: inline-flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: absolute;
  top: 100%;
  transition: opacity 0.2s ease-in-out;
  width: 100%;
  z-index: 1000;
`;

interface Props {
  isDamage?: boolean;
}

const Button = styled.button<Props>`
  background: ${({ isDamage }) => (isDamage ? 'var(--danger)' : 'var(--positive)')};
  font-weight: var(--font-weight-bold);
  height: 25px;
  line-height: 25px;
  text-align: center;
  width: 50%;
`;

const Input = styled.input`
  background: var(--primary);
  font-size: var(--font-size-lg);
  padding: 0.3em 0.2em;
  text-align: center;
  width: 100%;
`;

const Styles = {
  Button,
  Container,
  Input,
};

export default Styles;
