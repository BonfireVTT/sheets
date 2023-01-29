import React from 'react';

import InputBox from '@components/InputBox/InputBox';
import { RootState } from '@data/redux/store';
import { connect } from 'react-redux';
import Layout from '@shared/Layout.styles';
import ArmorClass from '@components/ArmorClass';
import GeneralService from '../services/general.service';

interface Props {
  proficiency: number;
  speed_walking: number;
}

const General: React.FC<Props> = ({ proficiency, speed_walking }) => (
  <Layout.Group isRow isFullHeight>
    <ArmorClass />
    <div className="flex flex-col">
      <InputBox
        accessibleLabel="proficiency"
        label="Proficiency"
        value={proficiency}
        inputProps={{
          onChange: (e) => GeneralService.update('proficiencyBonus', +e.currentTarget.value),
        }}
      />
      <InputBox
        accessibleLabel="walking speed"
        label="Speed (walking)"
        value={speed_walking}
        inputProps={{
          onChange: (e) => GeneralService.update('speed_walking', +e.currentTarget.value),
        }}
      />
    </div>
  </Layout.Group>
);

const mapStateToProps = (state: RootState) => ({
  proficiency: state.general.proficiencyBonus,
  speed_walking: state.general.speed_walking,
});

export default connect(mapStateToProps)(General);
