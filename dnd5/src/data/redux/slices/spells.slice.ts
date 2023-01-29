import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Spell {
  casting_time?: string;
  damage_type?: number;
  damage?: string;
  effect?: string;
  hit?: string;
  id: string;
  level: number;
  name: string;
  range_type?: string;
  range?: string;
  school?: string;
}

export const spellsAdapter = createEntityAdapter<Spell>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const spellsSlice = createSlice({
  name: 'spell',
  initialState: spellsAdapter.getInitialState(),
  reducers: {
    create: spellsAdapter.addOne,
    populate: spellsAdapter.setMany,
    remove: spellsAdapter.removeOne,
    update: spellsAdapter.updateOne,
  },
});

export const spellsSelectors = spellsAdapter.getSelectors<RootState>(
  (state) => state.spells,
);

export const {
  create: createSpell,
  populate: populateSpells,
  remove: removeSpell,
  update: updateSpell,
} = spellsSlice.actions;

export default spellsSlice.reducer;
