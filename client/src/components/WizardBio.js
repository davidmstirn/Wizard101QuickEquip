import {
  getTitle,
  getHealth,
  getMana
} from '../data'
import '../css/WizardBio.css'

function WizardBio(props) {
  return(
    <div className='Bio'>
      <div className='Level'>
        {getTitle(props.level) + ' (Level ' + props.level + ')'}
      </div>
      <div className='School'>
        {props.school}
      </div>
      <div className='InateStats'>
        <div className='StatBox'>
          <p>Health</p>
          <p>{getHealth(props.school, props.level)}</p>
        </div>
        <div className='StatBox'>
          <p>Mana</p>
          <p>{getMana(props.school, props.level)}</p>
        </div>
      </div>
    </div>
  )
}

export default WizardBio;