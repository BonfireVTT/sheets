import React from 'react';
import { useSelector } from 'react-redux';

import StatBox from '@components/StatBox/StatBox';
import { getSkillModifier } from '@data/redux/selectors/skills.selectors';
import { RootState } from '@data/redux/store';
import Layout from '@shared/Layout.styles';

const Senses: React.FC = () => {
  const perception = useSelector((state: RootState) => getSkillModifier(state, 'perception'));
  const investigation = useSelector((state: RootState) => getSkillModifier(state, 'investigation'));
  const insight = useSelector((state: RootState) => getSkillModifier(state, 'insight'));

  return (
    <Layout.Group>
      <Layout.Heading>senses</Layout.Heading>
      <StatBox
        accessibleLabel="Passive wisdom (perception)"
        label="Passive wis (perception)"
        modifier={10 + perception}
      />
      <StatBox
        accessibleLabel="Passive intelligence (investigation)"
        label="Passive int (investigation)"
        modifier={10 + investigation}
      />
      <StatBox
        accessibleLabel="Passive intelligence (insight)"
        label="Passive int (insight)"
        modifier={10 + insight}
      />
    </Layout.Group>
  );
};

export default Senses;
