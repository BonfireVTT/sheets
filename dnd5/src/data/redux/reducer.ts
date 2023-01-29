import { combineReducers } from '@reduxjs/toolkit';

import abilities from './slices/abilities.slice';
import attacks from './slices/attacks.slice';
import classes from './slices/classes.slice';
import defenses from './slices/defenses.slice';
import general from './slices/general.slice';
import items from './slices/items.slice';
import sheet from './slices/sheet.slice';
import skills from './slices/skills.slice';
import spells from './slices/spells.slice';

const reducer = combineReducers({
  abilities,
  attacks,
  classes,
  defenses,
  general,
  items,
  sheet,
  skills,
  spells,
});

export default reducer;
