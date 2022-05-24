import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Home from './routes/Home';
import WizardSelect from './routes/WizardSelect';
import Wizard from './routes/Wizard';
import WizardBasicStatsHelper from './routes/WizardBasicStatsHelper';
import WizardAdvancedStatsHelper from './routes/WizardAdvancedStatsHelper';
import WizardAdvancedStatsPageHelper from './routes/WizardAdvancedStatsPageHelper';
import NoRoute from './routes/NoRoute';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="select" element={<WizardSelect />} />
          <Route path="show">
            <Route path=":wizardId" element={<Wizard />} >
              <Route index element={<WizardBasicStatsHelper />} />
              <Route path="basic" element={<WizardBasicStatsHelper />} />
              <Route path="advanced" element={<WizardAdvancedStatsHelper />} >
                <Route path=":pageId" element={<WizardAdvancedStatsPageHelper />} />
              </Route>
              <Route path="*" element={<NoRoute />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NoRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
