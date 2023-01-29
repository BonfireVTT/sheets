/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';
import { AbilityState } from '../slices/abilities.slice';
import { RootState } from '../store';

const abilityState = (state: RootState, key: keyof AbilityState) => state.abilities[key];

export const getAbilityScore = createSelector(
  [abilityState],
  ({ score }) => Math.floor((score - 10) / 2),
);
