import { createSpell, Spell, updateSpell } from '@data/redux/slices/spells.slice';
import { store } from '@data/redux/store';

const create = (data: Omit<Spell, 'id'>) => {
  store.dispatch(
    createSpell(
      {
        ...data,
        id: crypto.randomUUID(),
      },
    ),
  );
};

const update = (changes: Omit<Spell, 'id'>, id: string) => {
  store.dispatch(
    updateSpell({
      id,
      changes,
    }),
  );
};

const SpellService = {
  create,
  update,
};

export default SpellService;
