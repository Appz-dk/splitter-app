import { ChangeEventHandler } from "react";
import BillTipBox from "./BillTipBox";

const tipAmounts = ["5%", "10%", "15%", "25%", "50%"];

type BillTipProps = {
  onTipChange: (tipAmount: string) => void;
};

const BillTip: React.FC<BillTipProps> = ({ onTipChange }) => {
  return (
    <div className="bill__tip-container">
      <label>Select Tip %</label>
      {tipAmounts.map((tip) => (
        <BillTipBox key={tip} tipAmount={tip} onTipChange={onTipChange} />
      ))}
      <input
        type="number"
        className="bill__input"
        placeholder="Custom"
        max={200}
        min={0}
        onChange={(e) => onTipChange(e.target.value)}
      />
    </div>
  );
};

export default BillTip;
