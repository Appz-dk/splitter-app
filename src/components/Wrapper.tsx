import { useEffect, useRef, useState } from "react";
import Bill from "./bill/Bill";
import Output from "./output/Output";

export type BillForm = {
  bill: string;
  tip: string;
  people: string;
};

const defaultBillForm = {
  bill: "",
  tip: "",
  people: "",
};

export type BillOutput = {
  tipPerPerson: number;
  totalPerPerson: number;
};

const defaultBillOutput = {
  tipPerPerson: 0,
  totalPerPerson: 0,
};

const Wrapper = () => {
  const customTipRef = useRef<HTMLInputElement>(null);
  const [billForm, setBillForm] = useState<BillForm>(defaultBillForm);
  const [billOutput, setBillOutput] = useState<BillOutput>(defaultBillOutput);

  const onFormChange = (key: string, value: string) => {
    setBillForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const billReset = () => {
    setBillForm(defaultBillForm);
    setBillOutput(defaultBillOutput);

    // Janky reset of custom tip input (because it has to be uncontrolled)
    if (customTipRef.current !== null) {
      customTipRef.current.value = "";
    }
  };

  useEffect(() => {
    if (billForm.bill !== "0" && billForm.people !== "0" && billForm.tip !== "0") {
      const bill = Number(billForm.bill);
      const tipProcent = Number(billForm.tip);
      const people = Number(billForm.people);

      // Guard clause
      if (bill === 0 || people === 0) {
        setBillOutput(defaultBillOutput);
        return;
      }

      // tip amount divided by amount of people
      const tipPerPerson = ((bill / 100) * tipProcent) / people;
      const totalPerPerson = bill / people + tipPerPerson;

      // Store billOutput in state
      setBillOutput({
        tipPerPerson,
        totalPerPerson,
      });
    }
  }, [billForm]);

  return (
    <section className="splitter__wrapper">
      <Bill onFormChange={onFormChange} billForm={billForm} customTipRef={customTipRef} />
      <Output billOutput={billOutput} billReset={billReset} />
    </section>
  );
};

export default Wrapper;
