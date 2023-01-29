import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@data/redux/store';
import { skillsSelectors } from '@data/redux/slices/skills.slice';
import { Proficiency } from '@shared/Input.style';

import Tooltip from '@shared/Tooltip.styles';
import SkillService from '../../services/skills.service';
import S from './Skill.styles';

interface SkillProps {
  data: {
    ability?: string;
    label: string;
    defaultValue: number;
    reduxKey: string;
  },
}

const Stat = ({ data }: SkillProps) => {
  const { ability, label, reduxKey } = data;

  const [invalid, setInvalid] = React.useState(false);

  const skill = useSelector(
    (state: RootState) => skillsSelectors.selectById(state, reduxKey),
  );
  if (!skill) return null;

  const isValueValid = (value: string) => {
    const parsedValue = parseInt(value, 10);

    if (Number.isNaN(parsedValue)) {
      setInvalid(true);
      return false;
    }

    setInvalid(false);
    return true;
  };

  return (
    <S.Container>
      <Tooltip content="Mark as proficiency" delay={200}>
        <Proficiency
          arial-label={`Mark ${ability} as proficiency`}
          checked={skill.isProficiency}
          onChange={
            (e) => SkillService.update({ isProficiency: e.currentTarget.checked }, reduxKey)
          }
        />
      </Tooltip>
      <S.Bonus
        onChange={(e) => isValueValid(e.currentTarget.value)}
        onBlur={(e) => {
          if (invalid) return;

          const value = parseInt(e.currentTarget.value, 10);
          SkillService.update({ value }, reduxKey);
        }}
        defaultValue={skill.value}
        inputMode="numeric"
        isInvalid={invalid}
        step={1}
        type="text"
        aria-label={`skill points for ${label}`}
      />
      <S.Label tabIndex={0} aria-label="press enter to roll">
        { ability && (
          <S.Ability aria-label={`related ability is ${ability}`}>
            {ability}
          </S.Ability>
        )}
        <span>{label}</span>
      </S.Label>
    </S.Container>
  );
};

export default Stat;
