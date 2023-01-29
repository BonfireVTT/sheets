/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';
import { spellsSelectors } from '../slices/spells.slice';
import { RootState } from '../store';

const spells = (state: RootState) => spellsSelectors.selectAll(state);

// export const getSpellsByLevel = createSelector(
//   [spells],
//   (spell) => {
//     if (typeof skill === 'undefined') return 0;

//     const { value, isProficiency } = skill;

//     if (isProficiency) return value + 1;
//     return value;
//   },
// );

export const getSpellsByLevel = createSelector(
  [
    // Usual first input - extract value from `state`
    spells,
    // Take the second arg, `category`, and forward to the output selector
    (state, level) => level,
  ],
  (items, level) => items
    .filter((spell) => spell.level === level)
    .sort((a, b) => a.name.localeCompare(b.name)),
);
