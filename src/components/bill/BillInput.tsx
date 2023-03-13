type BillInputProps = {
  value: string;
  label: string;
  type: string;
  svg: string;
  alt: string;
  formKey: string;
  onFormChange: (formKey: string, value: string) => void;
  min?: number;
};

const BillInput: React.FC<BillInputProps> = ({
  value,
  label,
  type,
  svg,
  alt,
  formKey,
  onFormChange,
}) => {
  return (
    <div className="bill__input-container">
      <label htmlFor={formKey}>{label}</label>
      <img src={svg} alt={alt} />
      {/* Can remove max if needed */}
      <input
        id={formKey}
        value={value}
        className="bill__input"
        type={type}
        placeholder="0"
        min={0}
        max={100000}
        onChange={(e) => onFormChange(formKey, e.target.value)}
        // Prevent scrolling from changing the number value
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
    </div>
  );
};

export default BillInput;
