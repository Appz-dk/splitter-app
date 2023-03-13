type BillTipBoxProps = {
  tipAmount: string;
  onTipChange: (key: string, tipAmount: string) => void;
  isActive: boolean;
};

const BillTipBox: React.FC<BillTipBoxProps> = ({ tipAmount, onTipChange, isActive }) => {
  // return <button onClick={() => onTipChange("tip", tipAmount.slice(0, -1))}>{tipAmount}</button>;

  return (
    <input
      className={isActive ? "bill__input-btn bill__input-btn-active" : "bill__input-btn"}
      value={tipAmount}
      onClick={() => onTipChange("tip", tipAmount.slice(0, -1))}
      readOnly
    />
  );
};

export default BillTipBox;
