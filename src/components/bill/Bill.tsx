import dollarSvg from "../../assets/images/icon-dollar.svg";
import personSvg from "../../assets/images/icon-person.svg";
import { BillForm } from "../Wrapper";
import BillInput from "./BillInput";
import BillTip from "./BillTip";

type BillProps = {
  onFormChange: (key: string, value: string) => void;
  billForm: BillForm;
  customTipRef: React.MutableRefObject<HTMLInputElement | null>;
};

const Bill: React.FC<BillProps> = ({ onFormChange, billForm, customTipRef }) => {
  const onBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bill">
      <form onSubmit={onBillSubmit}>
        <BillInput
          label="Bill"
          type="number"
          svg={dollarSvg}
          alt="$"
          onFormChange={onFormChange}
          formKey={"bill"}
          value={billForm.bill}
        />
        <BillTip onTipChange={onFormChange} billForm={billForm} customTipRef={customTipRef} />
        <BillInput
          label="Number of People"
          type="number"
          svg={personSvg}
          alt="Icon of a person's shape"
          onFormChange={onFormChange}
          formKey={"people"}
          value={billForm.people}
        />
      </form>
    </div>
  );
};

export default Bill;
