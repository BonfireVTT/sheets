import React from 'react';

import './styles/global.css';

import {
  Tabs, TabPanel,
} from 'react-tabs';
import Mode from '@components/Mode/Mode';
import Sync from '@components/Sync';
import Character from '@components/Character';
import Inventory from './tabs/Inventory';
import Meta from './sections/Meta/Meta';
import Spells from './tabs/Spells/Spells';
import Attacks from './tabs/Attacks/Attacks';
import General from './sections/General';
import Area from './shared/Areas.styles';
import Abilities from './sections/Abilities';
import Health from './sections/Health/Health';
import { Tab, TabList } from './components/Tabs';

import Overview from './tabs/Overview/Overview';

function App() {
  return (
    <div className="container mx-auto p-2">
      <Area.Container>

        <Area.Meta>
          <Meta>
            <>
              <Mode />
              <Sync />
            </>
          </Meta>
        </Area.Meta>

        <Area.Character>
          <Character />
        </Area.Character>

        <Area.Health>
          <Health />
        </Area.Health>
        <Area.Defenses>
          <General />
        </Area.Defenses>
        <Area.Abilities>
          <Abilities />
        </Area.Abilities>

        <Area.Tabs>
          <Tabs>

            <TabList>
              <Tab>Overview</Tab>
              <Tab>Attacks</Tab>
              <Tab>Spells</Tab>
              <Tab>Inventory</Tab>
            </TabList>

            <TabPanel>
              <Overview />
            </TabPanel>
            <TabPanel>
              <Attacks />
            </TabPanel>
            <TabPanel>
              <Spells />
            </TabPanel>
            <TabPanel>
              <Inventory />
            </TabPanel>
          </Tabs>
        </Area.Tabs>
      </Area.Container>
    </div>
  );
}

export default App;
