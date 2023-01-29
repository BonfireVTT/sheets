import React from 'react';
import { useSelector } from 'react-redux';
import { getAbilityScore } from '@data/redux/selectors/abilities.selectors';
import { AbilityState, updateAbility, Ability as ReduxAbility } from '@data/redux/slices/abilities.slice';
import { RootState, store } from '@data/redux/store';

import S from './Ability.styles';

interface StatProps {
  data: {
    accessibleLabel: string;
    defaultValue: number;
    key: string;
    label: string;
    reduxKey: keyof AbilityState;
  }
}

const setScore = (key: keyof AbilityState, changes: Partial<ReduxAbility>) => {
  store.dispatch(updateAbility({ key, changes }));
};

const Ability: React.FC<StatProps> = ({ data }) => {
  const { accessibleLabel, label, reduxKey } = data;

  const { score } = useSelector((state: RootState) => state.abilities[reduxKey]);
  const modifier = useSelector((state: RootState) => getAbilityScore(state, reduxKey));

  return (
    <S.Container>
      <S.Inner>
        <S.Score />
        <S.Input
          aria-label={`${accessibleLabel} score`}
          defaultValue={score}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setScore(reduxKey, { score: +e.currentTarget.value });
          }}
          type="number"
        />
        <S.Modifier aria-label={`${accessibleLabel} modifier ${modifier}`}>
          {modifier}
        </S.Modifier>
      </S.Inner>
      <S.Label aria-hidden>{label}</S.Label>
    </S.Container>
  );
};

export default Ability;
