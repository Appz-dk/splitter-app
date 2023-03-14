type BillTipBoxProps = {
  tipAmount: string;
  onTipChange: (key: string, tipAmount: string) => void;
  isActive: boolean;
  label: string;
};

const BillTipBox: React.FC<BillTipBoxProps> = ({ tipAmount, onTipChange, isActive, label }) => {
  // return <button onClick={() => onTipChange("tip", tipAmount.slice(0, -1))}>{tipAmount}</button>;

  return (
    <>
      <label htmlFor={label} className="visually-hidden">
        {label}
      </label>
      <input
        id={label}
        className={isActive ? "bill__input-btn bill__input-btn-active" : "bill__input-btn"}
        value={tipAmount}
        onClick={() => onTipChange("tip", tipAmount.slice(0, -1))}
        // For accessibility
        onKeyDown={(e) => {
          if (e.code === "Space") {
            onTipChange("tip", tipAmount.slice(0, -1));
          }
        }}
        readOnly
      />
    </>
  );
};

export default BillTipBox;
