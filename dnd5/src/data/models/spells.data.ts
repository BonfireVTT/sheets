export interface SpellLevel {
  id: number;
  createLabel: string;
  label: string;
  target: number;
}

export const spellLevels: SpellLevel[] = [
  {
    id: 0,
    createLabel: 'Cantrip',
    label: 'Cantrips',
    target: 0,
  },
  {
    id: 1,
    createLabel: '1st',
    label: '1st level',
    target: 1,
  },
  {
    id: 2,
    createLabel: '2nd',
    label: '2nd level',
    target: 2,
  },
  {
    id: 3,
    createLabel: '3rd',
    label: '3rd level',
    target: 3,
  },
  {
    id: 4,
    createLabel: '4th',
    label: '4th level',
    target: 4,
  },
  {
    id: 5,
    createLabel: '5th',
    label: '5th level',
    target: 5,
  },
  {
    id: 6,
    createLabel: '6th',
    label: '6th level',
    target: 6,
  },
  {
    id: 7,
    createLabel: '7th',
    label: '7th level',
    target: 7,
  },
  {
    id: 8,
    createLabel: '8th',
    label: '8th level',
    target: 8,
  },
  {
    id: 9,
    createLabel: '9th',
    label: '9th level',
    target: 9,
  },
];

interface SpellRangeType {
  id: number;
  label: string;
}

export const spellRangeTypes: SpellRangeType[] = [
  {
    id: 0,
    label: '–',
  },
  {
    id: 1,
    label: 'Self',
  },
  {
    id: 2,
    label: 'Touch',
  },
  {
    id: 3,
    label: 'Ranged',
  },
  {
    id: 4,
    label: 'Sight',
  },
];

export const spellSchools = [
  {
    id: 0,
    label: 'Conjuration',
  },
  {
    id: 1,
    label: 'Necromancy',
  },
  {
    id: 2,
    label: 'Evocation',
  },
  {
    id: 3,
    label: 'Abjuration',
  },
  {
    id: 4,
    label: 'Transmutation',
  },
  {
    id: 5,
    label: 'Divination',
  },
  {
    id: 6,
    label: 'Enchantment',
  },
  {
    id: 7,
    label: 'Illusion',
  },
];
