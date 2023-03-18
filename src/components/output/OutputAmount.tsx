type OutputAmountProps = {
  outputType: string;
  outputAmount: string;
};

const OutputAmount: React.FC<OutputAmountProps> = ({ outputType, outputAmount }) => {
  // Scales down the fontsize if output length gets too long, so it doesnt break the layout.
  // The numbers are just magic numbers, found by trial and error.
  const fontSize = Math.max(Math.min(1.9, 16 / outputAmount.length), 0.8);
  return (
    <div className="output__amount-container">
      <div className="output__type">
        <p className="visually-hidden">{`${outputType} per person`}</p>
        <p aria-hidden>{outputType}</p>
        <p aria-hidden>/ person</p>
      </div>
      <div className="output__amount">
        <p style={{ fontSize: `${fontSize}rem` }}>${outputAmount}</p>
      </div>
    </div>
  );
};

export default OutputAmount;
