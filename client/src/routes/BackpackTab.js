import { useLocation, useParams } from "react-router-dom";
import { getWizard } from "../data";
import "../css/Backpack.css"
import BackpackList from "../components/BackpackList"

export default function BackpackTab() {
  let params = useParams();
  let wizard = getWizard(parseInt(params.wizardId));
  let location = useLocation();
  let pageArr = location.pathname.split('/');
  let page = pageArr[pageArr.length-1];
  return (
    <div className="BackpackContent">
      <div className='BackpackLeft'>
        <p>Left</p>
      </div>
      <div className='Divider'/>
      <div className='BackpackRight'>
        <BackpackList type={page} />
      </div>
    </div>
  );
}
