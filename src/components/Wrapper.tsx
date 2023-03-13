import { useState } from "react";
import Bill from "./bill/Bill";
import Output from "./output/Output";

export type BillForm = {
  bill: string;
  tip: string;
  people: string;
};

const defaultBillForm = {
  bill: "0",
  tip: "0",
  people: "0",
};

type BillOutput = {
  tipPerPerson: string;
  totalPerPerson: string;
};

const defaultBillOutput = {
  tipPerPerson: "0.00",
  totalPerPerson: "0.00",
};

const Wrapper = () => {
  const [billForm, setBillForm] = useState<BillForm>(defaultBillForm);
  const [billOutput, setBillOutput] = useState<BillOutput>(defaultBillOutput);

  const onFormChange = (key: string, value: string) => {
    setBillForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (billForm.bill !== "0" && billForm.people !== "0" && billForm.tip !== "0") {
      console.log("calculate");
    }
  };

  return (
    <main className="splitter__wrapper">
      <Bill onFormChange={onFormChange} billForm={billForm} />
      <Output />
    </main>
  );
};

export default Wrapper;
