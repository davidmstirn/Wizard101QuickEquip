import { useParams } from "react-router-dom";
import { getWizard } from "../data";
import WizardBio from "../components/WizardBio";
import "../css/Wizard.css"

export default function Wizard() {
  let params = useParams();
  let wizard = getWizard(parseInt(params.wizardId));
  return (
    <div className='SpellbookFrame'>
      <h2 className='SpellbookHeader'>{wizard.name}</h2>
      <div className='Spellbook'>
        <div className='Character'>
          <WizardBio school={wizard.school} level={wizard.level}/>
          <div className='Divider'/>
          <div className='Stats'/>
        </div>
      </div>
    </div>
  );
}
