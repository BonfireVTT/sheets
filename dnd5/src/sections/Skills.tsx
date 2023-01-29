import React from 'react';

import skills from '@data/models/skills.data';
import Skill from '../components/Skill/Skill';
import Layout from '../shared/Layout.styles';

const Skills: React.FC = () => (
  <Layout.Group>
    <Layout.Heading>Skills</Layout.Heading>
    { skills.map((skill) => <Skill key={skill.key} data={skill} />) }
  </Layout.Group>
);

export default Skills;
