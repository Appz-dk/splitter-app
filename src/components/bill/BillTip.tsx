import { ChangeEventHandler } from "react";
import { BillForm } from "../Wrapper";
import BillTipBox from "./BillTipBox";

const tipAmounts = ["5%", "10%", "15%", "25%", "50%"];

type BillTipProps = {
  onTipChange: (key: string, tipAmount: string) => void;
  billForm: BillForm;
  customTipRef: React.MutableRefObject<HTMLInputElement | null>;
};

const BillTip: React.FC<BillTipProps> = ({ onTipChange, billForm, customTipRef }) => {
  return (
    <fieldset className="bill__tip-container">
      <legend>Select Tip %</legend>
      {tipAmounts.map((tip) => (
        <BillTipBox
          key={tip}
          label={tip}
          tipAmount={tip}
          onTipChange={onTipChange}
          isActive={billForm.tip === tip.slice(0, -1)}
        />
      ))}
      <label htmlFor="custom__tip" className="visually-hidden">
        Custom tip amount
      </label>
      <input
        ref={customTipRef}
        id="custom__tip"
        type="number"
        className="bill__input"
        placeholder="Custom"
        max={200}
        min={0}
        onChange={(e) => onTipChange("tip", e.target.value)}
        // Prevents scrolling from changing the number value
        onWheel={(e) => e.currentTarget.blur()}

        // Alternative that doesn't blur on scroll (but prevents scrolling from happening when cursor is over input element)
        // onFocus={(e) =>
        //   e.target.addEventListener(
        //     "wheel",
        //     function (e) {
        //       e.preventDefault();
        //     },
        //     { passive: false }
        //   )
        // }
      />
    </fieldset>
  );
};

export default BillTip;
