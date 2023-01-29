import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface CharacterClass {
  createdAt: Date;
  id: string;
  level: number;
  name: string;
}

export const classesAdapter = createEntityAdapter<CharacterClass>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const classesSlice = createSlice({
  name: 'class',
  initialState: classesAdapter.getInitialState(),
  reducers: {
    create: classesAdapter.addOne,
    populate: classesAdapter.setMany,
    remove: classesAdapter.removeOne,
    update: classesAdapter.updateOne,
  },
});

export const itemsSelectors = classesAdapter.getSelectors<RootState>(
  (state) => state.classes,
);

export const {
  create: createClass,
  populate: populateClasses,
  remove: removeClass,
  update: updateClass,
} = classesSlice.actions;

export default classesSlice.reducer;
