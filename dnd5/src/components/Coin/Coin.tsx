import Tooltip from '@shared/Tooltip.styles';
import React from 'react';
import S from './Coin.styles';

interface Props {
  color: string;
  iconLetter: string;
  name: string;
  qty: number;
}

const Coin: React.FC<Props> = ({
  color, iconLetter, name, qty,
}) => (
  <Tooltip content={name}>
    <S.Container>
      <S.Icon color={color} aria-hidden>{iconLetter}</S.Icon>
      <S.Input defaultValue={qty} />
    </S.Container>
  </Tooltip>
);

export default Coin;
