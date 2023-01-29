import { store } from '@data/redux/store';
import { populateAttacks, RangeType } from '@data/redux/slices/attacks.slice';
import { populateSpells } from '@data/redux/slices/spells.slice';
import { populateItems } from '@data/redux/slices/items.slice';
import { populateSkills } from '@data/redux/slices/skills.slice';

store.dispatch(populateSkills([
  {
    id: 'acrobatics',
    isProficiency: true,
    value: 8,
  },
]));

store.dispatch(populateAttacks([
  {
    id: '1',
    damage: '2d6 + 2d6 + 3',
    hit: 2,
    name: 'Longsword',
    range: 5,
    rangeType: RangeType.MEELE,
  },
  {
    id: '2',
    damage: '1d6',
    hit: 2,
    name: 'Dagger',
    range: 5,
    rangeType: RangeType.MEELE,
  },
  {
    id: '3',
    damage: '1d6',
    hit: 1,
    name: 'Crossbow',
    range: 30,
    rangeType: RangeType.RANGED,
  },
]));

store.dispatch(
  populateSpells([
    {
      casting_time: '1A',
      damage_type: 1,
      damage: '1d6',
      effect: 'Color Sprayyyyyy',
      hit: undefined,
      id: '1',
      level: 1,
      name: 'Color Spray',
      range_type: '3',
      range: '60',
      school: '2',
    },
  ]),
);

store.dispatch(
  populateItems([
    {
      cost: 1,
      id: '11',
      name: 'Healing Potion',
      qty: 3,
      weight: 0.1,
    },
    {
      cost: 5,
      id: '12',
      name: 'Healing Potion (Moderate)',
      qty: 2,
      weight: 0.1,
    },
  ]),
);
