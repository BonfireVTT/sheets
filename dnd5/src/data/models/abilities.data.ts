import { AbilityState } from '@data/redux/slices/abilities.slice';

interface AbilityData {
  accessibleLabel: string;
  defaultValue: number;
  key: string;
  reduxKey: keyof AbilityState;
  label: string;
}

const abilities: AbilityData[] = [
  {
    accessibleLabel: 'strength',
    defaultValue: 10,
    key: 'ability.str',
    reduxKey: 'strength',
    label: 'str',
  },
  {
    accessibleLabel: 'dexterity',
    defaultValue: 10,
    key: 'ability.dex',
    reduxKey: 'dexterity',
    label: 'dex',
  },
  {
    accessibleLabel: 'constitution',
    defaultValue: 10,
    key: 'ability.cons',
    reduxKey: 'constitution',
    label: 'cons',
  },
  {
    accessibleLabel: 'intelligence',
    defaultValue: 10,
    key: 'ability.int',
    reduxKey: 'intelligence',
    label: 'int',
  },
  {
    accessibleLabel: 'wisdom',
    defaultValue: 10,
    key: 'ability.wis',
    reduxKey: 'wisdom',
    label: 'wis',
  },
  {
    accessibleLabel: 'charisma',
    defaultValue: 10,
    key: 'ability.char',
    reduxKey: 'charisma',
    label: 'cha',
  },
];

export default abilities;
