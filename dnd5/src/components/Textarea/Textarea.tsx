/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';

import S from './Textarea.styles';

interface Props {
  accessibleLabel: string;
  label: string;
  // onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  textareaProps: InputHTMLAttributes<HTMLTextAreaElement>;
}

const Textarea: React.FC<Props> = ({
  accessibleLabel, label, value, textareaProps,
}) => (
  <S.Container>
    <S.Label aria-label={accessibleLabel}>
      {label}
    </S.Label>
    <S.Textarea value={value} {...textareaProps} />
  </S.Container>
);

export default Textarea;
