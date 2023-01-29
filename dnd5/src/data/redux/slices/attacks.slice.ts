import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export enum RangeType {
  MEELE = 'meele',
  RANGED = 'ranged',
}

export interface Attack {
  id: string;
  damage: string;
  hit: number;
  name: string;
  range: number;
  rangeType: RangeType;
}

export const attacksAdapter = createEntityAdapter<Attack>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const attacksSlice = createSlice({
  name: 'attacks',
  initialState: attacksAdapter.getInitialState(),
  reducers: {
    populate: attacksAdapter.setMany,
    update: attacksAdapter.updateOne,
  },
});

export const attacksSelectors = attacksAdapter.getSelectors<RootState>(
  (state) => state.attacks,
);

export const { populate: populateAttacks, update: updateAttack } = attacksSlice.actions;
export default attacksSlice.reducer;
