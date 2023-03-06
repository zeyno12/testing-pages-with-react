import React from "react";
import Logo from "../../images/bagcamiz_logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo">
              <img src={Logo} alt="Bagca Logo" />
            </div>
          </div>
          <div className="col-lg-9">
            <ul>
              <li>Haqqımızda</li>
              <li>Əlaqə</li>
              <li>Vakansiya</li>
              <li>Bağçalarımız</li>
              <li>Xidmətlərimiz</li>
              <li><i className="bi bi-person"></i> AZE <i className="bi bi-arrow-down-short"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
