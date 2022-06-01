import React from "react";
import {
  Link,
  Outlet,
  useOutletContext
} from "react-router-dom";
import "../css/WizardSelect.css"
import { getWizards } from '../data'

function WizardSelect(props) {
  let context = useOutletContext();
  
  let selectedWizard = context.selectedWizard;
  let setSelectedWizard = context.setSelectedWizard;
  
  function onValueChange(event) {
    setSelectedWizard(parseInt(event.target.value))
  }

  let wizards = getWizards();
  let wizardList = "";
  if(wizards)
  {
    wizardList = wizards.map(({ name, school, level}, index) => {
      return (
          <label
            key={index}
            className={selectedWizard === index ? "current" : ""}
            data-testid={'wizardLabel'+index}
            >
            <input
              type="radio"
              id={index}
              name='wizard'
              data-testid={'wizardOption'+index}
              value={index}
              checked={selectedWizard === index}
              onChange={onValueChange}
            />
            {name} {school} {level}
          </label>
      );	
    });
  }

  return (
    <div className="WizardSelector">
      {wizardList}
      <Link
        to={`/show/${selectedWizard}/character/basic`}
        data-testid='wizardShow'>
          Show
      </Link>
      <br />
      <Link
        to={`/edit/${selectedWizard}`}
        data-testid='wizardEdit'>
          Edit
      </Link>
      <Outlet />
    </div>
  );
}

export default WizardSelect;