/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SheetState {
  attackModalId?: string;
  attackModalOpen: boolean;
  isAutoSyncing: boolean;
  isDirty: boolean;
  isEditing: boolean;
  isSyncing: boolean;
  lastSyncAt?: string;
  manualSyncAllowed: boolean;
  spellModalId?: string;
  spellModalOpen: boolean;
}

const initialState: SheetState = {
  attackModalId: undefined,
  attackModalOpen: false,
  isAutoSyncing: false,
  isDirty: false,
  isEditing: false,
  isSyncing: false,
  lastSyncAt: '',
  manualSyncAllowed: true,
  spellModalId: undefined,
  spellModalOpen: false,
};

export const sheetSlice = createSlice({
  name: 'sheet',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<Partial<SheetState>>,
    ) => {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    },
  },
});

export const { update: updateSheet } = sheetSlice.actions;
export default sheetSlice.reducer;
