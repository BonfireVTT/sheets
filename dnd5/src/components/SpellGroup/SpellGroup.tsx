import Spell from '@components/Spell/Spell';
import { SpellLevel } from '@data/models/spells.data';
import { getSpellsByLevel } from '@data/redux/selectors/spells.selectors';
import { RootState } from '@data/redux/store';
import { ListingHeader } from '@shared/Listing.styles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import S from './SpellGroup.styles';

interface Props {
  spellLevel: SpellLevel;
}

const SpellGroup: React.FC<Props> = ({ spellLevel }) => {
  const { label, target } = spellLevel;
  const spells = useSelector((state: RootState) => getSpellsByLevel(state, target));

  const [open, setOpen] = useState(spells.length > 0);

  return (
    <S.Container>
      <S.Header>
        <S.Label onClick={() => setOpen(!open)}>
          <S.OpenIndicator isOpen={open}>⟁</S.OpenIndicator>
          {label}
        </S.Label>
      </S.Header>
      {
        open && (
          <S.Spells>
            { spells.length === 0 && <S.NoSpell>No spell to show</S.NoSpell> }
            {
              spells.length > 0 && (
                <>
                  <ListingHeader className="inline-flex">
                    <div className="w-[35%]">Spell</div>
                    <div className="w-[10%]">Range</div>
                    <div className="w-[10%]">Hit</div>
                    <div className="w-[20%]">Effect</div>
                    <div className="w-[25%] text-right">Actions</div>
                  </ListingHeader>
                  {spells.map(({ id }) => <Spell key={id} spellId={id} />)}
                </>
              )
            }
          </S.Spells>
        )
      }
    </S.Container>
  );
};

export default SpellGroup;
