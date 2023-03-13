import { useState } from "react";
import dollarSvg from "../../assets/images/icon-dollar.svg";
import personSvg from "../../assets/images/icon-person.svg";
import BillInput from "./BillInput";
import BillTip from "./BillTip";

type BillForm = {
  bill: string;
  tip: string;
  people: string;
};

const defaultBillForm = {
  bill: "0",
  tip: "0",
  people: "0",
};

const Bill = () => {
  const [billForm, setBillForm] = useState<BillForm>(defaultBillForm);

  const onBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onFormChange = (key: string, value: string) => {
    setBillForm((prev) => ({
      ...prev,
      [key]: value,
    }));
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
        <BillTip onTipChange={onFormChange} />
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
