import { PropertyData } from '@data/data.types';

interface SkillData {
  ability: string;
  reduxKey: string;
}

type SkillPropertyData = PropertyData & SkillData;

const skills: SkillPropertyData[] = [
  {
    ability: 'dex',
    accessibleLabel: 'Acrobatics',
    defaultValue: 0,
    key: 'skills.acrobatics',
    label: 'Acrobatics',
    reduxKey: 'acrobatics',
  },
  {
    ability: 'wis',
    accessibleLabel: 'Animal Handling',
    defaultValue: 0,
    key: 'skills.animal_handling',
    label: 'Animal Handling',
    reduxKey: 'animal_handling',
  },
  {
    ability: 'int',
    accessibleLabel: 'Arcana',
    defaultValue: 0,
    key: 'skills.arcana',
    label: 'Arcana',
    reduxKey: 'arcana',
  },
  {
    ability: 'str',
    accessibleLabel: 'Athletics',
    defaultValue: 0,
    key: 'skills.athletics',
    label: 'Athletics',
    reduxKey: 'atheltics',
  },
  {
    ability: 'cha',
    accessibleLabel: 'Deception',
    defaultValue: 0,
    key: 'skills.deception',
    label: 'Deception',
    reduxKey: 'deception',
  },
  {
    ability: 'int',
    accessibleLabel: 'History',
    defaultValue: 0,
    key: 'skills.history',
    label: 'History',
    reduxKey: 'history',
  },
  {
    ability: 'wis',
    accessibleLabel: 'Insight',
    defaultValue: 0,
    key: 'skills.insight',
    label: 'Insight',
    reduxKey: 'insight',
  },
  {
    ability: 'cha',
    accessibleLabel: 'Intimidation',
    defaultValue: 0,
    key: 'skills.intimidation',
    label: 'Intimidation',
    reduxKey: 'intimidation',
  },
  {
    ability: 'int',
    accessibleLabel: 'Investigation',
    defaultValue: 0,
    key: 'skills.investigation',
    label: 'Investigation',
    reduxKey: 'investigation',
  },
  {
    ability: 'wis',
    accessibleLabel: 'Medicine',
    defaultValue: 0,
    key: 'skills.medicine',
    label: 'Medicine',
    reduxKey: 'medicine',
  },
  {
    ability: 'int',
    accessibleLabel: 'Nature',
    defaultValue: 0,
    key: 'skills.nature',
    label: 'Nature',
    reduxKey: 'nature',
  },
  {
    ability: 'wis',
    accessibleLabel: 'Perception',
    defaultValue: 0,
    key: 'skills.perception',
    label: 'Perception',
    reduxKey: 'perception',
  },
  {
    ability: 'cha',
    accessibleLabel: 'Performance',
    defaultValue: 0,
    key: 'skills.performance',
    label: 'Performance',
    reduxKey: 'performance',
  },
  {
    ability: 'cha',
    accessibleLabel: 'Persuasion',
    defaultValue: 0,
    key: 'skills.persuasion',
    label: 'Persuasion',
    reduxKey: 'persuasion',
  },
  {
    ability: 'int',
    accessibleLabel: 'Religion',
    defaultValue: 0,
    key: 'skills.religion',
    label: 'Religion',
    reduxKey: 'religion',
  },
  {
    ability: 'dex',
    accessibleLabel: 'Sleight of Hand',
    defaultValue: 0,
    key: 'skills.sleight_of_hand',
    label: 'Sleight of Hand',
    reduxKey: 'sleight_of_hand',
  },
  {
    ability: 'dex',
    accessibleLabel: 'Stealth',
    defaultValue: 0,
    key: 'skills.stealth',
    label: 'Stealth',
    reduxKey: 'stealth',
  },
  {
    ability: 'wis',
    accessibleLabel: 'Survival',
    defaultValue: 0,
    key: 'skills.survival',
    label: 'Survival',
    reduxKey: 'survival',
  },
];

export default skills;
