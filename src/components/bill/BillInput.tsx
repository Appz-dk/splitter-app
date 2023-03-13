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
      <input className="bill__input" type={type} placeholder="0" />
    </div>
  );
};

export default BillInput;
