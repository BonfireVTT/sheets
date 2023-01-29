/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const skillState = (state: RootState, key: string) => state.skills.entities[key];

export const getSkillModifier = createSelector(
  [skillState],
  (skill) => {
    if (typeof skill === 'undefined') return 0;

    const { value, isProficiency } = skill;

    if (isProficiency) return value + 1;
    return value;
  },
);
