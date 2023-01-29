import Textarea from '@components/Textarea/Textarea';
import Layout from '@shared/Layout.styles';
import React from 'react';
import { RootState } from '@data/redux/store';
import { connect } from 'react-redux';
import GeneralService from '../../services/general.service';
import SavingThrows from '../../sections/SavingThrows';
import Senses from '../../sections/Senses';

import Skills from '../../sections/Skills';

import S from './Overview.styles';

interface Props {
  languages: string;
}

const Overview: React.FC<Props> = ({ languages }) => (
  <S.Container>
    <S.Skills>
      <Skills />
    </S.Skills>
    <S.Overview>
      <SavingThrows />
      <Senses />
      <Layout.Group>
        <Textarea
          accessibleLabel="Languages"
          label="Languages"
          value={languages}
          textareaProps={{
            onChange: (e) => GeneralService.update('languages', e.currentTarget.value),
          }}
        />
      </Layout.Group>
    </S.Overview>
  </S.Container>
);

const mapStateToProps = (state: RootState) => ({
  languages: state.general.languages,
});

export default connect(mapStateToProps)(Overview);
