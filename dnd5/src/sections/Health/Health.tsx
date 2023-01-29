import React from 'react';

import Layout from '@shared/Layout.styles';

import { RootState } from '@data/redux/store';
import { connect } from 'react-redux';
import HealthCalculator from '@components/HealthCalculator';
import { GeneralState } from '@data/redux/slices/general.slice';
import GeneralService from '../../services/general.service';
import S from './Health.styles';

interface Props {
  hp_current: string;
  hp_temp: string;
  hp_total: string;
}

const updateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.currentTarget;
  GeneralService.update(name as keyof GeneralState, value);
};

const Health: React.FC<Props> = ({ hp_current, hp_temp, hp_total }) => {
  const [currentHpFocused, setCurrentHpFocused] = React.useState(false);

  return (
    <Layout.Group isRow>
      <Layout.Heading>Health points</Layout.Heading>
      <S.InputGroup>
        <S.Label htmlFor="hp_current">Current</S.Label>
        <S.Input
          id="hp_current"
          name="hp_current"
          onChange={updateHandler}
          value={hp_current}
          isDanger={+hp_current < 1}
          onFocus={() => setCurrentHpFocused(true)}
          onBlur={() => setCurrentHpFocused(false)}
          type="text"
          inputMode="numeric"
        />
        <HealthCalculator parentFocused={currentHpFocused} />
      </S.InputGroup>
      <S.Separator>/</S.Separator>
      <S.InputGroup>
        <S.Label htmlFor="hp_total">Max</S.Label>
        <S.Input
          name="hp_total"
          onChange={updateHandler}
          value={hp_total}
          type="text"
          inputMode="numeric"
        />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="hp_temp">Temp</S.Label>
        <S.Input
          name="hp_temp"
          onChange={updateHandler}
          value={hp_temp}
          type="text"
          inputMode="numeric"
        />
      </S.InputGroup>
    </Layout.Group>
  );
};

const mapStateToProps = (state: RootState) => ({
  hp_current: state.general.hp_current,
  hp_temp: state.general.hp_temp,
  hp_total: state.general.hp_total,
});

export default connect(mapStateToProps)(Health);
