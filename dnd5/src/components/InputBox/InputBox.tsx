/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';

import S from './InputBox.styles';

interface Props {
  accessibleLabel: string;
  label: string;
  value: number;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const InputBox: React.FC<Props> = ({
  label, accessibleLabel, value, inputProps,
}) => (
  <S.Container>
    <S.Label aria-label={accessibleLabel}>
      <S.Input type="number" value={value} {...inputProps} />
      { label }
    </S.Label>
  </S.Container>
);

export default InputBox;
