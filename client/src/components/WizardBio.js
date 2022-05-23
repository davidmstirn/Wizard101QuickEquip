import {
  getTitle,
  getHealth,
  getMana
} from '../data'
import '../css/WizardBio.css'

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
        <div className='StatBox'>
          <p className='StatBoxHeader'>Health</p>
          <p className='StatBoxContent'
            data-testid='wizardTestHealth'>
            {getHealth(props.school, props.level)}</p>
        </div>
        <div className='StatBox'>
          <p className='StatBoxHeader'>Mana</p>
          <p className='StatBoxContent'
            data-testid='wizardTestMana'>
            {getMana(props.school, props.level)}</p>
        </div>
      </div>
    </div>
  )
}

export default WizardBio;