import { getCritical, getBlock, getPierce, getStunResist, getHealing } from '../data';
import WizardSchoolStat from './WizardSchoolStat';
import WizardStat from './WizardStat';

/* Converts from the outlet context to the WizardAdvancedStats */
function WizardAdvancedStatsPage(props) {
  let wizard = props.wizard;
  let page = props.page;

  let pages = [
    <>
      <WizardSchoolStat statTitle='Critical Rating' statFirstName='Critical' statFirst={getCritical(wizard)} />
      <WizardSchoolStat statTitle='Block Rating' statFirstName='Block' statFirst={getBlock(wizard)} />
      <WizardSchoolStat statTitle='Armor Piercing' statFirstName='Pierce' statFirst={getPierce(wizard)} />
      <div>
      <WizardStat statTitle='Stun Resistance' statIsPercent='true' statFirstName='StunResist' statFirst={getStunResist(wizard)} />
      <WizardStat statTitle='Healing (In / Out)' statIsPercent='true' statFirstName='Incoming' statFirst={getHealing(wizard)[0]} statSecondName='Outgoing' statSecond={getHealing(wizard)[1]} />
      </div>
    </>
  ];

  return(
    <div className='AdvancedStats'>
      {pages[page-1]}
    </div>
  )
}

export default WizardAdvancedStatsPage;