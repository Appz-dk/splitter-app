import { useState } from "react";
import dollarSvg from "../../assets/images/icon-dollar.svg";
import personSvg from "../../assets/images/icon-person.svg";
import BillInput from "./BillInput";
import BillTip from "./BillTip";

const Bill = () => {
  const [bill, setBill] = useState("0");
  const [tip, setTip] = useState("0");
  const [people, setPeople] = useState("0");

  const onBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onTipChange = (tipAmount: string) => {
    console.log(tipAmount);
    console.log(typeof tipAmount);
    setTip(tipAmount);
  };

  return (
    <div className="bill">
      <form onSubmit={onBillSubmit}>
        <BillInput label="Bill" type="number" svg={dollarSvg} alt="$" />
        <BillTip onTipChange={onTipChange} />
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
