/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import S from './FormInput.styles';

interface Props {
  label: string;
  children: React.ReactNode;
  touched?: boolean;
  error?: string;
}

const FormInput: React.FC<Props> = (props) => {
  const {
    children, error, label, touched,
  } = props;

  const hasError = touched === true && (typeof error === 'string');

  return (
    <S.Container>
      <S.Label hasError={hasError}>
        <span>{label}</span>
        {children}
        { hasError && (<S.Error>{error}</S.Error>) }
      </S.Label>
    </S.Container>
  );
};

export default FormInput;
