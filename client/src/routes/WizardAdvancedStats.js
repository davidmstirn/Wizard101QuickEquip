import '../css/WizardAdvancedStats.css';
import { NavLink, Outlet, useParams, useOutletContext } from 'react-router-dom';
import { numPages } from './WizardAdvancedStatsPage';
import leftArrow from '../images/left-circular-128.png'
import rightArrow from '../images/right-circular-128.png'

function WizardAdvancedStats(props) {
  let context = useOutletContext();
  if(!context) context = props;
  
  let params = useParams();
  let page = parseInt(params.pageId);
  context.setAdvancedStatPage(page);
  let pages = numPages();
  
  return(
    <div className="AdvancedFrame">
      <Outlet context={context}/>
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