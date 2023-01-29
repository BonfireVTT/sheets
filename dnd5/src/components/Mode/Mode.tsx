import { updateSheet } from '@data/redux/slices/sheet.slice';
import { RootState, store } from '@data/redux/store';
import Tooltip from '@shared/Tooltip.styles';
import React from 'react';
import { connect } from 'react-redux';

import S from './Mode.styles';

interface Props {
  isEditing: boolean;
}

const Mode: React.FC<Props> = ({ isEditing }) => {
  const toggleSheetMode = () => {
    store.dispatch(
      updateSheet({
        isEditing: !isEditing,
      }),
    );
  };

  return (
    <Tooltip
      content={
        <>Hold the <kbd>CTRL</kbd> key to toggle between modes</>
      }
    >
      <S.Container onClick={toggleSheetMode}>
        <S.Switch>
          <S.SwitchBall isEditing={isEditing} />
        </S.Switch>
        <S.Label>{isEditing ? 'Edit' : 'Play'} mode</S.Label>
      </S.Container>
    </Tooltip>
  );
};

const mapStateToProps = (state: RootState) => ({
  isEditing: state.sheet.isEditing,
});

export default connect(mapStateToProps)(Mode);
