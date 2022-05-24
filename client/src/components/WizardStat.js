import '../css/WizardStat.css'

function WizardStat(props) {
  let statTitle = props.statTitle;
  let statIsPercent = props.statIsPercent;
  
  let statFirstName = props.statFirstName;
  let statFirst = props.statFirst;
  if(!statFirst) {
    statFirst = 0;
  }

  let statSecondName = props.statSecondName;
  let statSecond = props.statSecond;

  return(
    <div className='StatBox'>
      <p className='StatBoxHeader'>{statTitle}</p>
      <p className='StatBoxContent'>
        <span data-testid={'wizardTest'+statFirstName} >{statFirst+(statIsPercent ? '%' : '')}</span>
        {statSecond ? <span data-testid={'wizardTest'+statSecondName} >/ {statSecond+(statIsPercent ? '%' : '')}</span> : ''}
      </p>
    </div>
  )
}

export default WizardStat;