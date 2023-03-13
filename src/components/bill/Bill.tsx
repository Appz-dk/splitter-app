import dollarSvg from "../../assets/images/icon-dollar.svg";
import personSvg from "../../assets/images/icon-person.svg";
import BillInput from "./BillInput";

const Bill = () => {
  return (
    <div className="bill">
      <form>
        <BillInput label="Bill" type="number" svg={dollarSvg} alt="$" />
        <BillInput
          label="Number of People"
          type="number"
          svg={personSvg}
          alt="Icon of a person's shape"
        />
      </form>
    </div>
  );
};

export default Bill;
