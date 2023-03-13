import { useState } from "react";
import dollarSvg from "../../assets/images/icon-dollar.svg";
import personSvg from "../../assets/images/icon-person.svg";
import { BillForm } from "../Wrapper";
import BillInput from "./BillInput";
import BillTip from "./BillTip";

// type BillForm = {
//   bill: string;
//   tip: string;
//   people: string;
// };

// const defaultBillForm = {
//   bill: "0",
//   tip: "0",
//   people: "0",
// };

type BillProps = {
  onFormChange: (key: string, value: string) => void;
  billForm: BillForm;
};

const Bill: React.FC<BillProps> = ({ onFormChange, billForm }) => {
  // const [billForm, setBillForm] = useState<BillForm>(defaultBillForm);

  // const onFormChange = (key: string, value: string) => {
  //   setBillForm((prev) => ({
  //     ...prev,
  //     [key]: value,
  //   }));
  // };

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
        />
        <BillTip onTipChange={onFormChange} billForm={billForm} />
        <BillInput
          label="Number of People"
          type="number"
          svg={personSvg}
          alt="Icon of a person's shape"
          onFormChange={onFormChange}
          formKey={"people"}
        />
      </form>
    </div>
  );
};

export default Bill;
