import '../css/WizardStat.css'

/* Creates a box for displaying wizard stats
    Note: for statSecond to render as 0,
      set it to 0; any other falsy value will 
      result in the stat being omitted.
*/
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
        {(statSecond || statSecond === 0) ? <span data-testid={'wizardTest'+statSecondName} > / {statSecond+(statIsPercent ? '%' : '')}</span> : ''}
      </p>
    </div>
  )
}

export default WizardStat;