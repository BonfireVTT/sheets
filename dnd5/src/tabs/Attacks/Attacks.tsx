import React from 'react';
import { connect, useSelector } from 'react-redux';

import { Attack as AttackType, attacksSelectors } from '@data/redux/slices/attacks.slice';
import { RootState, store } from '@data/redux/store';

import Attack from '@components/Attack/Attack';

import Modal from '@components/Modal/Modal';
import { updateSheet } from '@data/redux/slices/sheet.slice';
import Button from '@shared/Button.styles';
import AttackModal from '../../modals/AttackModal';
import S from './Attacks.styles';

export const toggleAttackModal = (attackModalOpen: boolean, attackModalId?: string) => {
  store.dispatch(updateSheet({ attackModalOpen, attackModalId }));
};

interface Props {
  attacks: AttackType[];
}

const Attacks: React.FC<Props> = ({ attacks }) => {
  const modalOpen = useSelector((state: RootState) => state.sheet.attackModalOpen);

  return (
    <S.Container>
      <Modal
        isOpen={modalOpen}
      >
        <AttackModal close={() => toggleAttackModal(false)} />
      </Modal>

      <S.Controls>
        <Button onClick={() => toggleAttackModal(true)}>Add an attack</Button>
      </S.Controls>

      { attacks.map((attack) => <Attack key={attack.id} attackId={attack.id} />) }
    </S.Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  attacks: attacksSelectors.selectAll(state),
});

export default connect(mapStateToProps)(Attacks);
