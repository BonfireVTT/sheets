import Action from '@components/Action';
import { attacksSelectors } from '@data/redux/slices/attacks.slice';
import { store } from '@data/redux/store';
import Button from '@shared/Button.styles';
import React from 'react';
import bonfireMessage from '../../utils/postMessage';
import { toggleAttackModal } from '../../tabs/Attacks/Attacks';

import S from './Attack.styles';

interface Props {
  attackId: string;
}

const Attack: React.FC<Props> = ({ attackId }) => {
  const attack = attacksSelectors.selectById(store.getState(), attackId);
  if (!attack) return null;

  const {
    name, rangeType, hit, damage, range, id,
  } = attack;

  return (
    <S.Container>
      <S.Group width={25} className="flex-col">
        <S.Label>{name}</S.Label>
        <S.Detail>{rangeType} attack</S.Detail>
      </S.Group>
      <S.Group width={15}>
        <Action
          visibleLabel={hit}
          accessibleLabel="roll for attack"
          icon="strike.svg"
        >
          {hit}
        </Action>
      </S.Group>
      <S.Group width={25}>
        <Action
          visibleLabel={damage}
          accessibleLabel="roll for damage"
          icon="damage.svg"
          action={() => bonfireMessage({
            type: 'roll',
            damage,
          })}
        >
          {damage}
        </Action>
      </S.Group>
      <S.Group width={15}>
        {range && <S.Range>{range} ft</S.Range>}
      </S.Group>
      <S.Group width={20}>
        <Button appearance="ghost" onClick={() => toggleAttackModal(true, id)}>Edit</Button>
        <Button appearance="ghost">Remove</Button>
      </S.Group>
    </S.Container>
  );
};

export default Attack;
