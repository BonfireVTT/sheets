/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { RootState } from '@data/redux/store';
import Button from '@shared/Button.styles';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React from 'react';
import { connect } from 'react-redux';
import S from './Sync.styles';

interface Props {
  isAutoSyncing: boolean;
  isDirty: boolean;
  isSyncing: boolean;
  lastSyncAt?: string;
  manualSyncAllowed: boolean;
}

const Sync: React.FC<Props> = (props) => {
  const {
    isAutoSyncing, isDirty, isSyncing, manualSyncAllowed, lastSyncAt,
  } = props;

  return (
    <S.Container>
      <Button
        disabled={!isDirty || isSyncing || !manualSyncAllowed}
        type="button"
      >
        { isSyncing && isAutoSyncing && 'Auto saving...' }
        { isSyncing && !isAutoSyncing && 'Saving...' }
        { !isSyncing && 'Save' }
      </Button>
      {
        typeof lastSyncAt === 'string' && (
          <S.LastSync>Saved {formatDistanceToNow(new Date(), { addSuffix: true })}</S.LastSync>
        )
      }
    </S.Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAutoSyncing: state.sheet.isAutoSyncing,
  isDirty: state.sheet.isDirty,
  isSyncing: state.sheet.isSyncing,
  lastSyncAt: state.sheet.lastSyncAt,
  manualSyncAllowed: state.sheet.manualSyncAllowed,
});

export default connect(mapStateToProps)(Sync);
