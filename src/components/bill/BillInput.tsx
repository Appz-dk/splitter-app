type BillInputProps = {
  label: string;
  type: string;
  svg: string;
  alt: string;
};

const BillInput: React.FC<BillInputProps> = ({ label, type, svg, alt }) => {
  return (
    <div className="bill__input-container">
      <label>{label}</label>
      <img src={svg} alt={alt} />
      {/* Can remove max if needed */}
      <input className="bill__input" type={type} placeholder="0" min={0} max={100000} />
    </div>
  );
};

export default BillInput;
