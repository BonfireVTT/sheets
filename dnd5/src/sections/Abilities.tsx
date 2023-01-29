import React from 'react';

import abilities from '@data/models/abilities.data';
import Ability from '@components/Ability/Ability';
import Layout from '@shared/Layout.styles';

const Abilities: React.FC = () => (
  <Layout.Group isRow>
    { abilities.map((ability) => <Ability key={ability.key} data={ability} />) }
  </Layout.Group>
);

export default Abilities;
