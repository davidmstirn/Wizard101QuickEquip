import '../css/WizardBasicStats.css';
import { useOutletContext } from 'react-router-dom';
import { getAccuracy, getDamage, getDamageFlat, getResist, getResistFlat } from '../data';
import WizardBasicStats from '../components/WizardBasicStats';

/* Converts from the outlet context to the WizardBasicStats */
function WizardBasicStatsHelper(props) {
  let wizard = useOutletContext();
  return(
    <WizardBasicStats
      damage={getDamage(wizard)}
      damageFlat={getDamageFlat(wizard)}
      resist={getResist(wizard)}
      resistFlat={getResistFlat(wizard)}
      accuracy={getAccuracy(wizard)}
    />
  )
}

export default WizardBasicStatsHelper;