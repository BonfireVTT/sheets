/* eslint-disable react/require-default-props */
import React from 'react';

import S from './Input.styles';

interface Props {
  accessibleLabel: string;
  children: JSX.Element;
  label?: string;
}

const Input: React.FC<Props> = ({
  accessibleLabel, children, label,
}) => (
  <S.Container>
    <S.Label aria-label={accessibleLabel}>
      {label && <span>{label}</span>}
      {children}
    </S.Label>
  </S.Container>
);

export default Input;
