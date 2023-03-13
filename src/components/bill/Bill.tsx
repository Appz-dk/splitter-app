import dollarSvg from "../../assets/images/icon-dollar.svg";
import personSvg from "../../assets/images/icon-person.svg";
import BillInput from "./BillInput";

const Bill = () => {
  return (
    <div className="bill">
      <form>
        <label>Bill</label>
        <BillInput type="number" svg={dollarSvg} alt="$" />
      </form>
    </div>
  );
};

export default Bill;
