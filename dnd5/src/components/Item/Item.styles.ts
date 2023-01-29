import { Field, Form } from 'formik';
import styled from 'styled-components';

interface Props {
  isEditing: boolean;
}

const Container = styled(Form)<Props>`
  align-items: center;
  background: ${({ isEditing }) => (isEditing ? 'var(--primary-light)' : 'var(--dark-transparent)')};
  display: inline-flex;
  width: 100%;
`;

const Name = styled.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface InputProps {
  hasErrors?: boolean;
}

const Input = styled(Field)<InputProps>`
  appearance: text;
  background: none;
  border: 2px solid transparent;
  border-color: ${({ hasErrors }) => (hasErrors ? 'var(--error)' : 'transparent')};
  padding: 0.3em;
`;

const Styles = {
  Container,
  Name,
  Input,
};

export default Styles;
