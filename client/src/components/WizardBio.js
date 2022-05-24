import {
  getTitle,
  getHealth,
  getMana,
  getEnergy,
  getFishingLuck
} from '../data'
import '../css/WizardBio.css'
import WizardStat from './WizardStat';

function WizardBio(props) {
  return(
    <div className='Bio'>
      <div className='Level'
        data-testid='wizardTestLevel'
      >
        {getTitle(props.level) + ' (Level ' + props.level + ')'}
      </div>
      <div className='School'
        data-testid='wizardTestSchool'>
        {props.school}
      </div>
      <div className='InateStats'>
        <WizardStat statTitle="Health" statFirstName="Health" statFirst={getHealth(props.school, props.level)} />
        <WizardStat statTitle="Mana" statFirstName="Mana" statFirst={getMana(props.school, props.level)} />
        <WizardStat statTitle="Energy" statFirstName="Energy" statFirst={getEnergy(props.school, props.level)} />
        <WizardStat statTitle="Fishing Luck" statIsPercent="true" statFirstName="FishingLuck" statFirst={getFishingLuck(props.school, props.level)} />
      </div>
    </div>
  )
}

export default WizardBio;