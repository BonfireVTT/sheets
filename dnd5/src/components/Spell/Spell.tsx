import Action from '@components/Action';
import { spellsSelectors } from '@data/redux/slices/spells.slice';
import { RootState } from '@data/redux/store';
import Button from '@shared/Button.styles';
import React from 'react';
import { useSelector } from 'react-redux';

import { toggleSpellModal } from '../../tabs/Spells/Spells';

import S from './Spell.styles';

interface Props {
  spellId: string;
}

const Spell: React.FC<Props> = ({ spellId }) => {
  const spell = useSelector((state: RootState) => spellsSelectors.selectById(state, spellId));
  if (!spell) return null;

  const {
    damage, hit, name, range, effect, id,
  } = spell;

  return (
    <S.Container>
      <S.Col width={35}>
        {name}
      </S.Col>
      <S.Col width={10}>
        {range ? `${range}ft` : '–'}
      </S.Col>
      <S.Col width={10}>
        {hit || '–'}
      </S.Col>
      <S.Col width={20}>
        {
          damage && (
            <Action accessibleLabel="Roll damage" visibleLabel="Damage">{damage}</Action>
          )
        }
        { effect && <S.Effect>{effect}</S.Effect> }
      </S.Col>
      <S.Col width={25} className="text-right">
        <Button
          appearance="ghost"
          onClick={() => toggleSpellModal(true, id)}
        >
          Edit
        </Button>
        <Button appearance="ghost">Cast</Button>
      </S.Col>
    </S.Container>
  );
};

export default Spell;
