import { useOutletContext } from 'react-router-dom';
import WizardAdvancedStats from '../components/WizardAdvancedStats';

/* Converts from the outlet context to the WizardAdvancedStats */
function WizardAdvancedStatsHelper(props) {
  let context = useOutletContext();
  return(
    <WizardAdvancedStats
      wizard={context.wizard}
      setAdvancedStatPage={context.setAdvancedStatPage}
    />
  )
}

export default WizardAdvancedStatsHelper;