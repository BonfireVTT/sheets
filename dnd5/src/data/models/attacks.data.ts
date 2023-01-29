interface AttackRangeType {
  id: number;
  label: string;
}

export const attackRangeTypes: AttackRangeType[] = [
  {
    id: 0,
    label: '–',
  },
  {
    id: 1,
    label: 'Melee',
  },
  {
    id: 2,
    label: 'Ranged',
  },
];

interface AttackDamageType {
  id: number;
  label: string;
}

export const attackDamageTypes: AttackDamageType[] = [
  {
    id: 0,
    label: '–',
  },
  {
    id: 1,
    label: 'acid',
  },
  {
    id: 2,
    label: 'bludgeoning',
  },
  {
    id: 3,
    label: 'cold',
  },
  {
    id: 4,
    label: 'fire',
  },
  {
    id: 5,
    label: 'force',
  },
  {
    id: 6,
    label: 'lightning',
  },
  {
    id: 7,
    label: 'necrotic',
  },
  {
    id: 8,
    label: 'piercing',
  },
  {
    id: 9,
    label: 'poison',
  },
  {
    id: 10,
    label: 'psychic',
  },
  {
    id: 11,
    label: 'radiant',
  },
  {
    id: 12,
    label: 'slashing',
  },
  {
    id: 13,
    label: 'thunderr',
  },
];
