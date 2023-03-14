type OutputAmountProps = {
  outputType: string;
  outputAmount: string;
};

const OutputAmount: React.FC<OutputAmountProps> = ({ outputType, outputAmount }) => {
  return (
    <div className="output__amount-container">
      <div className="output__type">
        <p className="visually-hidden">{`${outputType} per person`}</p>
        <p aria-hidden>{outputType}</p>
        <p aria-hidden>/ person</p>
      </div>
      <div className="output__amount">
        <p>${outputAmount}</p>
      </div>
    </div>
  );
};

export default OutputAmount;
