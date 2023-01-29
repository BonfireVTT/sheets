/* eslint-disable react/require-default-props */
import Tooltip from '@shared/Tooltip.styles';
import React from 'react';
import S from './Info.styles';

interface Props {
  icon: string;
  text: string;
  tooltip: string;
}

const Info: React.FC<Props> = ({ icon, text, tooltip }) => (
  <Tooltip content={tooltip}>
    <S.Container>
      <S.Icon alt="" src={`${icon}`} />
      <S.Text>{text}</S.Text>
    </S.Container>
  </Tooltip>
);

export default Info;
