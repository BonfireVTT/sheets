import { RootState } from '@data/redux/store';
import React from 'react';
import { connect } from 'react-redux';
import S from './ArmorClass.styles';

interface Props {
  ac: number;
}

const ArmorClass: React.FC<Props> = ({ ac }) => (
  <S.Container>
    <S.Label>
      <span>Armor Class</span>
      <input value={ac} placeholder="AC" type="number" />
    </S.Label>
  </S.Container>
);

const mapStateToProps = (state: RootState) => ({
  ac: state.defenses.ac,
});

export default connect(mapStateToProps)(ArmorClass);
