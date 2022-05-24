import '../css/WizardBasicStats.css';
import WizardSchoolStat from './WizardSchoolStat';

function WizardBasicStats(props) {
  return(
    <div className='BasicStats'>
      <WizardSchoolStat statTitle='Damage' statFirstName='Damage' statFirst={props.damage} statSecondName='FlatDamage' statSecond={props.damageFlat}/>
      <WizardSchoolStat statTitle='Resist' statFirstName='Resist' statFirst={props.resist} statSecondName='FlatResist' statSecond={props.resistFlat}/>
      <WizardSchoolStat statTitle='Accuracy' statFirstName='Accuracy' statFirst={props.accuracy}/>
    </div>
  )
}

export default WizardBasicStats;