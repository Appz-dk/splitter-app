import { useState } from "react";
import Bill from "./bill/Bill";
import Output from "./output/Output";

type BillOutput = {
  tipPerPerson: string;
  totalPerPerson: string;
};

const defaultBillOutput = {
  tipPerPerson: "0.00",
  totalPerPerson: "0.00",
};

const Wrapper = () => {
  const [billOutput, setBillOutput] = useState<BillOutput>(defaultBillOutput);

  return (
    <main className="splitter__wrapper">
      <Bill />
      <Output />
    </main>
  );
};

export default Wrapper;
