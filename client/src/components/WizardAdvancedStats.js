import '../css/WizardAdvancedStats.css';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { numPages } from './WizardAdvancedStatsPage';
import leftArrow from '../images/left-circular-128.png'
import rightArrow from '../images/right-circular-128.png'

function WizardAdvancedStats(props) {
  let params = useParams();
  let page = parseInt(params.pageId);
  let pages = numPages();
  
  return(
    <div className="AdvancedFrame">
      <Outlet context={props.wizard}/>
      <div className="AdvancedNav">
        <NavLink
          to={''+(page-1 === 0 ? pages : page-1)}
          data-testid='statAdvanced1'
          className={({ isActive }) => isActive? "current" : ""}>
          <img src={leftArrow} alt='left arrow' />
        </NavLink>
        <span>{page} / {pages}</span>
        <NavLink 
          to={''+(page+1 === pages+1 ? 1 : page+1)}
          data-testid='statAdvanced2'
          className={({ isActive }) => isActive? "current" : ""}>
          <img src={rightArrow} alt='left arrow' />
        </NavLink>
      </div>
    </div>
  )
}

export default WizardAdvancedStats;