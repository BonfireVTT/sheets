import Modal from '@components/Modal/Modal';
import SpellGroup from '@components/SpellGroup/SpellGroup';
import { spellLevels } from '@data/models/spells.data';
import { updateSheet } from '@data/redux/slices/sheet.slice';
import { RootState, store } from '@data/redux/store';
import Button from '@shared/Button.styles';
import React from 'react';
import { useSelector } from 'react-redux';
import SpellModal from '../../modals/SpellModal';

import S from './Spells.styles';

export const toggleSpellModal = (spellModalOpen: boolean, spellModalId?: string) => {
  store.dispatch(updateSheet({ spellModalOpen, spellModalId }));
};

const Spells: React.FC = () => {
  const modalOpen = useSelector((state: RootState) => state.sheet.spellModalOpen);

  return (
    <S.Container>

      <Modal isOpen={modalOpen}>
        <SpellModal close={() => toggleSpellModal(false)} />
      </Modal>

      <S.Controls>
        <Button onClick={() => toggleSpellModal(true)}>Add a spell</Button>
      </S.Controls>

      {
        spellLevels.map(
          (spellLevel) => <SpellGroup key={spellLevel.id} spellLevel={spellLevel} />,
        )
      }
    </S.Container>
  );
};

export default Spells;
