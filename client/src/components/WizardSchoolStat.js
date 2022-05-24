import '../css/WizardSchoolStat.css'
import fireicon from '../images/126px-(Icon)_Fire_Alternate_2.png';
import iceicon from '../images/126px-(Icon)_Ice_Alternate_2.png';
import stormicon from '../images/126px-(Icon)_Storm_Alternate_2.png';
import mythicon from '../images/126px-(Icon)_Myth_Alternate_2.png';
import lifeicon from '../images/126px-(Icon)_Life_Alternate_2.png';
import deathicon from '../images/126px-(Icon)_Death_Alternate_2.png';
import balanceicon from '../images/126px-(Icon)_Balance_Alternate_2.png';
import shadowicon from '../images/(Icon)_Shadow.png';

function WizardSchoolStat(props) {
  let statTitle = props.statTitle;
  let statFirstName = props.statFirstName;
  let statFirst = props.statFirst;
  if(!statFirst) {
    statFirst = [0,0,0,0,0,0,0,0];
  }
  let statFirstVals = '';
  if(statFirst)
  {
    statFirstVals = statFirst.map((value, index) => {
      return (
          <td key={index}
          data-testid={'wizardTest'+statFirstName+index}>
            {value === 0 ? '' : value}
          </td>
      );	
    });
  }

  let statSecondName = props.statSecondName;
  let statSecond = props.statSecond;
  if(!statSecond) {
    statSecond = [0,0,0,0,0,0,0,0];
  }
  let statSecondVals = '';
  if(statSecond)
  {
    statSecondVals = statSecond.map((value, index) => {
      return (
          <td key={index}
          data-testid={'wizardTest'+statSecondName+index}>
            {value === 0 ? '' : value}
          </td>
      );	
    });
  }

  return(
    <div className='StatFrame'>
      <p>{statTitle}</p>
      <table className='StatTable'>
      <thead>
      <tr className='StatTableIcons'>
        <th><img src={fireicon} alt='Fire damage'/></th>
        <th><img src={iceicon} alt='Ice damage'/></th>
        <th><img src={stormicon} alt='Storm damage'/></th>
        <th><img src={mythicon} alt='Myth damage'/></th>
        <th><img src={lifeicon} alt='Life damage'/></th>
        <th><img src={deathicon} alt='Death damage'/></th>
        <th><img src={balanceicon} alt='Balance damage'/></th>
        <th><img src={shadowicon} alt='Shadow damage'/></th>
      </tr>
      </thead>
      <tbody>
      <tr className='StatTableValues'>
        {statFirstVals ? statFirstVals : ''}
      </tr>
      <tr className='StatTableValues'>
        {statSecondVals ? statSecondVals : ''}
      </tr>
      </tbody>
      </table>
    </div>
  )
}

export default WizardSchoolStat;