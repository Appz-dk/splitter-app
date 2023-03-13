import Bill from "./bill/Bill";
import Output from "./output/Output";

const Wrapper = () => {
  return (
    <main className="splitter__wrapper">
      <Bill />
      <Output />
    </main>
  );
};

export default Wrapper;
