import '../css/WizardAdvancedStats.css';
import { NavLink, Outlet } from 'react-router-dom';

function WizardAdvancedStats(props) {
  return(
    <div className="AdvancedFrame">
      <Outlet context={props.wizard}/>
      <div className="AdvancedNav">
        <NavLink
          to='1'
          data-testid='statAdvanced1'
          className={({ isActive }) => isActive? "current" : ""}>
          1
        </NavLink>
        <span> (1 / 2) </span>
        <NavLink 
          to='2'
          data-testid='statAdvanced2'
          className={({ isActive }) => isActive? "current" : ""}>
          2
        </NavLink>
      </div>
    </div>
  )
}

export default WizardAdvancedStats;