type BillInputProps = {
  label: string;
  type: string;
  svg: string;
  alt: string;
  formKey: string;
  onFormChange: (formKey: string, value: string) => void;
};

const BillInput: React.FC<BillInputProps> = ({ label, type, svg, alt, formKey, onFormChange }) => {
  return (
    <div className="bill__input-container">
      <label>{label}</label>
      <img src={svg} alt={alt} />
      {/* Can remove max if needed */}
      <input
        className="bill__input"
        type={type}
        placeholder="0"
        min={0}
        max={100000}
        onChange={(e) => onFormChange(formKey, e.target.value)}
      />
    </div>
  );
};

export default BillInput;
