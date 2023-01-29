/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';
import { itemsSelectors } from '../slices/items.slice';
import { RootState } from '../store';

const items = (state: RootState) => itemsSelectors.selectAll(state);

export const getInventoryWeight = createSelector(
  [items],
  (allItems) => allItems
    .reduce((acc, { qty, weight }) => acc + (qty * weight), 0),
);
