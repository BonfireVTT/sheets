import StatBox from '@components/StatBox/StatBox';
import { getAbilityScore } from '@data/redux/selectors/abilities.selectors';
import { AbilityState, updateAbility } from '@data/redux/slices/abilities.slice';
import { RootState, store } from '@data/redux/store';
import { Proficiency } from '@shared/Input.style';
import Tooltip from '@shared/Tooltip.styles';
import React from 'react';
import { useSelector } from 'react-redux';

import S from './SavingThrow.styles';

interface Props {
  data: {
    accessibleLabel: string;
    defaultValue: number;
    key: string;
    label: string;
    reduxKey: keyof AbilityState;
  }
}

const SavingThrow: React.FC<Props> = ({ data }) => {
  const { accessibleLabel, label, reduxKey } = data;

  const { isProficiency } = useSelector((state: RootState) => state.abilities[reduxKey]);
  const proficiencyBonus = useSelector((state: RootState) => state.general.proficiencyBonus);
  const modifier = useSelector((state: RootState) => getAbilityScore(state, reduxKey));

  return (
    <S.Container>
      <Tooltip content="Mark as proficiency">
        <Proficiency
          aria-label={`Mark ${accessibleLabel} saving throw as proficiency`}
          checked={isProficiency}
          onChange={(e) => {
            store.dispatch(
              updateAbility({
                key: reduxKey,
                changes: { isProficiency: e.currentTarget.checked },
              }),
            );
          }}
        />
      </Tooltip>
      <StatBox
        accessibleLabel={accessibleLabel}
        label={label}
        modifier={isProficiency ? modifier + proficiencyBonus : modifier}
      />
    </S.Container>
  );
};

export default SavingThrow;
