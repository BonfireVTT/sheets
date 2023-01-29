/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Ability {
  score: number;
  isProficiency: boolean;
}

export interface AbilityState {
  strength: Ability;
  dexterity: Ability;
  constitution: Ability;
  intelligence: Ability;
  wisdom: Ability;
  charisma: Ability;
}

const initialState: AbilityState = {
  strength: { score: 10, isProficiency: false },
  dexterity: { score: 10, isProficiency: false },
  constitution: { score: 10, isProficiency: false },
  intelligence: { score: 10, isProficiency: false },
  wisdom: { score: 10, isProficiency: false },
  charisma: { score: 10, isProficiency: false },
};

export const abilitySlice = createSlice({
  name: 'ability',
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<AbilityState>) => {
      state = action.payload;
    },
    update: (
      state,
      action: PayloadAction<{ key: keyof AbilityState, changes: Partial<Ability> }>,
    ) => {
      const { key, changes } = action.payload;
      state[key] = {
        ...state[key],
        ...changes,
      };
    },
  },
});

export const { populate: populateAbilities, update: updateAbility } = abilitySlice.actions;
export default abilitySlice.reducer;
