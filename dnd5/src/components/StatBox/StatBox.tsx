import Summary from '@shared/Summary.styles';
import React from 'react';

import S from './StatBox.styles';

interface Props {
  accessibleLabel: string;
  label: string;
  modifier: number;
}

const StatBox: React.FC<Props> = ({ accessibleLabel, label, modifier }) => (
  <S.Container>
    <Summary>{modifier}</Summary>
    <S.Label arial-label={accessibleLabel}>{label}</S.Label>
  </S.Container>
);

export default StatBox;
