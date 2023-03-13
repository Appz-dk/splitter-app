import { ChangeEventHandler } from "react";
import { BillForm } from "../Wrapper";
import BillTipBox from "./BillTipBox";

const tipAmounts = ["5%", "10%", "15%", "25%", "50%"];

type BillTipProps = {
  onTipChange: (key: string, tipAmount: string) => void;
  billForm: BillForm;
};

const BillTip: React.FC<BillTipProps> = ({ onTipChange, billForm }) => {
  return (
    <div className="bill__tip-container">
      <label>Select Tip %</label>
      {tipAmounts.map((tip) => (
        <BillTipBox
          key={tip}
          tipAmount={tip}
          onTipChange={onTipChange}
          isActive={billForm.tip === tip.slice(0, -1)}
        />
      ))}
      <input
        type="number"
        className="bill__input"
        placeholder="Custom"
        max={200}
        min={0}
        onChange={(e) => onTipChange("tip", e.target.value)}
      />
    </div>
  );
};

export default BillTip;
