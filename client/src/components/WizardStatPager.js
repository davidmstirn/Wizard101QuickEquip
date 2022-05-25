import React from "react";
import {
  NavLink,
  Outlet
} from "react-router-dom";
import '../css/WizardStatPager.css';

function WizardStatPager(props) {
  const [advancedStatPage, setAdvancedStatPage] = React.useState(1);

  let context = {setAdvancedStatPage: setAdvancedStatPage.bind(this), wizard: props.wizard}
  return (
      <div className="PagerFrame">
        <div className="PagerNav">
          <NavLink
            to='basic'
            data-testid='statPagerBasic'
            className={({ isActive }) => isActive? "current" : ""}>
            Basic
          </NavLink>
          <NavLink 
            to={'advanced/'+advancedStatPage}
            data-testid='statPagerAdvanced'
            className={({ isActive }) => isActive? "current" : ""}>
            Advanced
          </NavLink>
        </div>
        <Outlet context={context}/>
      </div>
  );
}

export default WizardStatPager;
