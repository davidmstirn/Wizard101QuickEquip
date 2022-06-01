import { Routes, Route } from 'react-router-dom'
import App from '../App';
import Home from './Home';
import WizardSelect from './WizardSelect';
import Spellbook from './Spellbook';
import Wizard from './Wizard';
import WizardBasicStats from './WizardBasicStats';
import WizardAdvancedStats from './WizardAdvancedStats';
import { WizardAdvancedStatsPage } from './WizardAdvancedStatsPage';
import Backpack from './Backpack';
import BackpackTab from './BackpackTab';
import NoRoute from './NoRoute';

function MyRouter() {
  return(
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="select" element={<WizardSelect />} />
        <Route path="show">
          <Route path=":wizardId" element={<Spellbook />} >
            <Route path="character" element={<Wizard />} >
              <Route index element={<WizardBasicStats />} />
              <Route path="basic" element={<WizardBasicStats />} />
              <Route path="advanced" element={<WizardAdvancedStats />} >
                <Route path=":pageId" element={<WizardAdvancedStatsPage />} />
              </Route>
              <Route path="*" element={<NoRoute />} />
            </Route>
            <Route path="backpack" element={<Backpack />} >
              <Route index element={<BackpackTab />} />
              <Route path="all" element={<BackpackTab />} />
              <Route path="hats" element={<BackpackTab />} />
              <Route path="robes" element={<BackpackTab />} />
              <Route path="boots" element={<BackpackTab />} />
              <Route path="wands" element={<BackpackTab />} />
              <Route path="athames" element={<BackpackTab />} />
              <Route path="amulets" element={<BackpackTab />} />
              <Route path="rings" element={<BackpackTab />} />
              <Route path="pets" element={<BackpackTab />} />
              <Route path="mounts" element={<BackpackTab />} />
              <Route path="decks" element={<BackpackTab />} />
              <Route path="*" element={<NoRoute />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NoRoute />} />
    </Routes>
  )
}

export default MyRouter;