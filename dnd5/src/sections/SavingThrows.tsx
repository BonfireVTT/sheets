import React from 'react';

import SavingThrow from '@components/SavingThrow/SavingThrow';
import abilities from '@data/models/abilities.data';
import Layout from '@shared/Layout.styles';

const SavingThrows: React.FC = () => (
  <Layout.Group isRow>
    <Layout.Heading>saving throws</Layout.Heading>
    { abilities.map((ability) => <SavingThrow key={ability.key} data={ability} />) }
  </Layout.Group>
);

export default SavingThrows;
