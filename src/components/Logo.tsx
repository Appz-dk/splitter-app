import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <h1 className="logo__container">
      <img src={logo} alt="logo: with the text 'Splitter', split onto two lines and capitalized" />
    </h1>
  );
};

export default Logo;
