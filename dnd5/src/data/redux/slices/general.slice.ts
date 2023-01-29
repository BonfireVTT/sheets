/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GeneralState {
  alignment: string;
  hp_current: string;
  hp_temp: string;
  hp_total: string;
  languages: string;
  name: string;
  proficiencyBonus: number;
  race: string;
  speed_walking: number;
}

const initialState: GeneralState = {
  alignment: '',
  hp_current: '10',
  hp_temp: '0',
  hp_total: '10',
  languages: '',
  name: '',
  proficiencyBonus: 0,
  race: '',
  speed_walking: 20,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<GeneralState>) => {
      state = action.payload;
    },
    update: (
      state,
      action: PayloadAction<Partial<GeneralState>>,
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { populate: populateGeneral, update: updateGeneral } = generalSlice.actions;
export default generalSlice.reducer;
