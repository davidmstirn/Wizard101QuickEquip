import '../css/WizardBasicStats.css';
import { useOutletContext } from 'react-router-dom';
import { getAccuracy, getDamage, getDamageFlat, getResist, getResistFlat } from '../data';
import WizardSchoolStat from '../components/WizardSchoolStat';

function WizardBasicStats(props) {
  let context = useOutletContext();
  let wizard = context.wizard;
  
  return(
    <div className='BasicStats'>
      <WizardSchoolStat statTitle='Damage' statFirstName='Damage' statFirst={getDamage(wizard)} statSecondName='FlatDamage' statSecond={getDamageFlat(wizard)}/>
      <WizardSchoolStat statTitle='Resist' statFirstName='Resist' statFirst={getResist(wizard)} statSecondName='FlatResist' statSecond={getResistFlat(wizard)}/>
      <WizardSchoolStat statTitle='Accuracy' statFirstName='Accuracy' statFirst={getAccuracy(wizard)}/>
    </div>
  )
}

export default WizardBasicStats;