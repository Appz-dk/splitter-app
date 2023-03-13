import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="logo__container">
      <img src={logo} alt="logo: Text of 'Splitter', split onto two lines and capitalized" />
    </div>
  );
};

export default Logo;
