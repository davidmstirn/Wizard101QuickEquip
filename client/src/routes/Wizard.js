import { useParams } from "react-router-dom";
import { getWizard } from "../data";
import WizardBio from "../components/WizardBio";
import WizardStatPager from "../components/WizardStatPager";
import "../css/Wizard.css"

export default function Wizard() {
  let params = useParams();
  let wizard = getWizard(parseInt(params.wizardId));
  return (
    <div className='Character'>
      <WizardBio school={wizard.school} level={wizard.level}/>
      <div className='Divider'/>
      <div className='Stats'>
        <WizardStatPager wizard={wizard}/>
      </div>
    </div>
  );
}
