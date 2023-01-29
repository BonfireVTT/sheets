/* eslint-disable no-param-reassign */
import skills from '@data/models/skills.data';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Skill {
  id: string;
  isProficiency: boolean;
  value: number;
}

export const skillsAdapter = createEntityAdapter<Skill>();

const filledState = skills.map((skill) => ({
  id: skill.reduxKey,
  isProficiency: false,
  value: skill.defaultValue,
}));

const emptyInitialState = skillsAdapter.getInitialState();
const initialState = skillsAdapter.upsertMany(emptyInitialState, filledState);

export const skillsSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    populate: skillsAdapter.setMany,
    update: skillsAdapter.updateOne,
  },
});

export const skillsSelectors = skillsAdapter.getSelectors<RootState>(
  (state) => state.skills,
);

export const { populate: populateSkills, update: updateSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
