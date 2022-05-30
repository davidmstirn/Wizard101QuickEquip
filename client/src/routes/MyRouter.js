import { Routes, Route } from 'react-router-dom'
import App from '../App';
import Home from './Home';
import WizardSelect from './WizardSelect';
import Wizard from './Wizard';
import WizardBasicStats from './WizardBasicStats';
import WizardAdvancedStats from './WizardAdvancedStats';
import { WizardAdvancedStatsPage } from './WizardAdvancedStatsPage';
import NoRoute from './NoRoute';

function MyRouter() {
  return(
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="select" element={<WizardSelect />} />
        <Route path="show">
          <Route path=":wizardId" element={<Wizard />} >
            <Route index element={<WizardBasicStats />} />
            <Route path="basic" element={<WizardBasicStats />} />
            <Route path="advanced" element={<WizardAdvancedStats />} >
              <Route path=":pageId" element={<WizardAdvancedStatsPage />} />
            </Route>
            <Route path="*" element={<NoRoute />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NoRoute />} />
    </Routes>
  )
}

export default MyRouter;