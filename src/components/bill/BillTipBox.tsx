type BillTipBoxProps = {
  tipAmount: string;
  onTipChange: (key: string, tipAmount: string) => void;
};

const BillTipBox: React.FC<BillTipBoxProps> = ({ tipAmount, onTipChange }) => {
  return <button onClick={() => onTipChange("tip", tipAmount.slice(0, -1))}>{tipAmount}</button>;
};

export default BillTipBox;
