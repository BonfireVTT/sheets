/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DefensesState {
  ac: number;
}

const initialState: DefensesState = {
  ac: 10,
};

export const defensesSlice = createSlice({
  name: 'defenses',
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<DefensesState>) => {
      state = action.payload;
    },
    update: (
      state,
      action: PayloadAction<Partial<DefensesState>>,
    ) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { populate: populateDefenses, update: updateDefenses } = defensesSlice.actions;
export default defensesSlice.reducer;
