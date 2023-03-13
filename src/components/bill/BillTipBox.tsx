type BillTipBoxProps = {
  tipAmount: string;
  onTipChange: (tipAmount: string) => void;
};

const BillTipBox: React.FC<BillTipBoxProps> = ({ tipAmount, onTipChange }) => {
  return <button onClick={() => onTipChange(tipAmount.slice(0, -1))}>{tipAmount}</button>;
};

export default BillTipBox;
