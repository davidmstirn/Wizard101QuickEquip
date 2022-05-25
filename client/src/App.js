import React from "react";
import {
  NavLink,
  Outlet
} from "react-router-dom";
import './css/App.css';

function App() {
  const [selectedWizard, setSelectedWizard] = React.useState(0);

  let context = {selectedWizard: selectedWizard, setSelectedWizard: setSelectedWizard.bind(this)};
  return (
      <div className="App">
        <nav>
          <NavLink
            to='home'
            data-testid='navHome'
            className={({ isActive }) => isActive? "current" : ""}>
            Home
          </NavLink>
          <NavLink 
            to='select'
            data-testid='navSelect'
            className={({ isActive }) => isActive? "current" : ""}>
            Wizard Select
          </NavLink>
        </nav>
        <Outlet context={context}/>
      </div>
  );
}

export default App;
