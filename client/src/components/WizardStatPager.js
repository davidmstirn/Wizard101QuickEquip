import React from "react";
import {
  NavLink,
  Outlet
} from "react-router-dom";
import '../css/WizardStatPager.css';

function WizardStatPager(props) {
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
            to='advanced/1'
            data-testid='statPagerAdvanced'
            className={({ isActive }) => isActive? "current" : ""}>
            Advanced
          </NavLink>
        </div>
        <Outlet context={props.wizard}/>
      </div>
  );
}

export default WizardStatPager;
