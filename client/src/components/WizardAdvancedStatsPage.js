import '../css/WizardAdvancedStatsPage.css';
import { getCritical, getBlock, getPierce, getStunResist, getHealing, getPipConversion, getPowerPip, getShadowPip } from '../data';
import WizardSchoolStat from './WizardSchoolStat';
import WizardStat from './WizardStat';

/* Converts from the outlet context to the WizardAdvancedStats */
export function WizardAdvancedStatsPage(props) {
  let wizard = props.wizard;
  let page = props.page;

  let pages = [
    <>
      <WizardSchoolStat statTitle='Critical Rating' statFirstName='Critical' statFirst={getCritical(wizard)} />
      <WizardSchoolStat statTitle='Block Rating' statFirstName='Block' statFirst={getBlock(wizard)} />
      <WizardSchoolStat statTitle='Armor Piercing' statFirstName='Pierce' statFirst={getPierce(wizard)} />
      <div className='AdvancedStatPair'>
      <WizardStat statTitle='Stun Resistance' statIsPercent='true' statFirstName='StunResist' statFirst={getStunResist(wizard)} />
      <WizardStat statTitle='Healing (In / Out)' statIsPercent='true' statFirstName='Incoming' statFirst={getHealing(wizard) ? getHealing(wizard)[0] : 0} statSecondName='Outgoing' statSecond={getHealing(wizard) ? getHealing(wizard)[1] : 0} />
      </div>
    </>,
    <>
      <WizardSchoolStat statTitle='Pip Conversion' statFirstName='PipConversion' statFirst={getPipConversion(wizard)} />
      <div className='AdvancedStatPair'>
      <WizardStat statTitle='Power Pips' statIsPercent='true' statFirstName='PowerPip' statFirst={getPowerPip(wizard)} />
      <WizardStat statTitle='Shadow Pip Rating' statFirstName='ShadowPip' statFirst={getShadowPip(wizard)} />
      </div>
    </>
  ];

  return(
    <div className='AdvancedStats'>
      {pages[page-1]}
    </div>
  )
}

export function numPages() {
  return 2;
}