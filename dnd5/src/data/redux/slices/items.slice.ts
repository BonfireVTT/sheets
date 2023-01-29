import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Item {
  cost: number;
  id: string;
  name: string;
  qty: number;
  weight: number;
}

export const itemsAdapter = createEntityAdapter<Item>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const itemsSlice = createSlice({
  name: 'item',
  initialState: itemsAdapter.getInitialState(),
  reducers: {
    create: itemsAdapter.addOne,
    populate: itemsAdapter.setMany,
    remove: itemsAdapter.removeOne,
    update: itemsAdapter.updateOne,
  },
});

export const itemsSelectors = itemsAdapter.getSelectors<RootState>(
  (state) => state.items,
);

export const {
  create: createItem,
  populate: populateItems,
  remove: removeItem,
  update: updateItem,
} = itemsSlice.actions;

export default itemsSlice.reducer;
