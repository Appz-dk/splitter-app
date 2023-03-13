type BillInputProps = {
  value: string;
  label: string;
  type: string;
  svg: string;
  alt: string;
  formKey: string;
  onFormChange: (formKey: string, value: string) => void;
  validate?: boolean;
};

const BillInput: React.FC<BillInputProps> = ({
  value,
  label,
  type,
  svg,
  alt,
  formKey,
  onFormChange,
  validate = false,
}) => {
  const inputError = validate && value === "0";

  return (
    <div className="bill__input-container">
      <div className="bill__input-validate">
        <label htmlFor={formKey}>{label}</label>
        {inputError && <span>Can't be zero</span>}
      </div>
      <img src={svg} alt={alt} />
      <input
        id={formKey}
        value={value}
        className={inputError ? "bill__input bill__input-error" : "bill__input"}
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
