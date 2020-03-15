import React from "react";

import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-icon">
        <div>JS</div>
      </div>
      <div className="header-menu">
        <div>
          <a
            href="https://www.linkedin.com/in/jonas-rafael-duarte-dos-santos-7b8803105/"
            target="_blank"
            class="fa fa-linkedin"
          ></a>
          <a
            href="mailto:jonasrdsantos@gmail.com"
            target="_blank"
            class="fa fa-google"
          ></a>
          <a
            href="https://wa.me/5551997919881"
            target="_blank"
            class="fa fa-whatsapp"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
