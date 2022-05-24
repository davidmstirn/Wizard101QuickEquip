import { useOutletContext, useParams } from 'react-router-dom';
import { getAccuracy, getDamage, getDamageFlat, getResist, getResistFlat } from '../data';
import WizardAdvancedStatsPage from '../components/WizardAdvancedStatsPage';

/* Converts from the outlet context to the WizardAdvancedStatsPage */
function WizardAdvancedStatsPageHelper(props) {
  let wizard = useOutletContext();
  let params = useParams();
  let page = parseInt(params.pageId);
  return(
    <WizardAdvancedStatsPage
      wizard={wizard}
      page={page}
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

export default WizardAdvancedStatsPageHelper;