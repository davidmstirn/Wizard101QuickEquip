import { useParams } from "react-router-dom";
import { getWizard, getItems } from "../data";
import "../css/BackpackList.css"

export default function BackpackList(props) {
  let params = useParams();
  let wizard = getWizard(parseInt(params.wizardId));

  let type = props.type;

  let items = getItems(wizard);
  let itemRows = "";
  if(items){
    itemRows = items.map((value, index) => {
      return (
        (type === "all" || value.type === type ?
        <tr key={index}>
          <td
          data-testid={'backpackListItem'+index}>
            {value.name}
          </td>
        </tr>
         : "")
      );	
    });
  }
  return (
    <div className="BackpackList">
      <table className='BackpackTable'>
      <tbody>
      {itemRows}
      </tbody>
      </table>
    </div>
  );
}
