import { NavLink, useParams, Outlet } from "react-router-dom";
import { getWizard } from "../data";
import "../css/Spellbook.css"

export default function Spellbook() {
  let params = useParams();
  let wizard = getWizard(parseInt(params.wizardId));
  return (
    <div className='SpellbookFrame'>
      <h2 className='SpellbookHeader'>{wizard.name}</h2>
      <div className='Spellbook'>
        <Outlet />
      </div>
      <div className='SpellbookNav'>
        <NavLink
          to='character'
          data-testid='wizardCharacter'
          className={({ isActive }) => isActive? "current" : ""}>
          Character
        </NavLink>
        <NavLink
          to='backpack'
          data-testid='wizardBackpack'
          className={({ isActive }) => isActive? "current" : ""}>
          Backpack
        </NavLink>
      </div>
    </div>
  );
}
