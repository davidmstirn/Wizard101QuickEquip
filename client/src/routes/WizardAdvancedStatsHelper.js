import { useOutletContext } from 'react-router-dom';
import { getAccuracy, getDamage, getDamageFlat, getResist, getResistFlat } from '../data';
import WizardAdvancedStats from '../components/WizardAdvancedStats';

/* Converts from the outlet context to the WizardAdvancedStats */
function WizardAdvancedStatsHelper(props) {
  let wizard = useOutletContext();
  return(
    <WizardAdvancedStats
      wizard={wizard}
      critical={getDamage(wizard)}
      block={getDamageFlat(wizard)}
      armorPiercing={getResist(wizard)}
      stunResist={getResistFlat(wizard)}
      healing={getAccuracy(wizard)}
      pipConversion={getAccuracy(wizard)}
      pipChance={getAccuracy(wizard)}
      shadowPipChance={getAccuracy(wizard)}
    />
  )
}

export default WizardAdvancedStatsHelper;