import { BillOutput } from "../Wrapper";
import OutputAmount from "./OutputAmount";

type OutputProps = {
  billOutput: BillOutput;
  billReset: () => void;
};

const Output: React.FC<OutputProps> = ({ billOutput, billReset }) => {
  return (
    <div className="output-container">
      <OutputAmount
        outputAmount={billOutput.tipPerPerson.toFixed(2) || "0.00"}
        outputType="Tip Amount"
      />
      <OutputAmount
        outputAmount={billOutput.totalPerPerson.toFixed(2) || "0.00"}
        outputType="Total"
      />
      <button onClick={billReset}>Reset</button>
    </div>
  );
};

export default Output;
