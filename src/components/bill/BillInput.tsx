type BillInputProps = {
  type: string;
  svg: string;
  alt: string;
};

const BillInput: React.FC<BillInputProps> = ({ type, svg, alt }) => {
  return (
    <>
      <img className="bill__input-svg" src={svg} alt={alt} />
      <input className="bill__input" type={type} placeholder="0" />
    </>
  );
};

export default BillInput;
