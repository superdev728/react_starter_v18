import React from "react";
import Logo from "../../assets/img/logo.jpg";

const Header = () => {
  // const [aptBalance, setAptBalance] = useState(0);

  return (
    <div className="bg-light">
      <div className="d-flex header-section">
        <div>
          <img src={Logo} alt="Aptos Logo" width="200px" height="50px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
