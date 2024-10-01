import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink } from "react-router-dom"; // For routing
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleLinkClick = () => {
    setShow(false); // Close the menu when a link is clicked
  };

  return (
    <nav>
      <div className="logo">Welcome Food</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
              onClick={handleLinkClick} // Close the menu on link click
            >
              {element.title}
            </ScrollLink>
          ))}
        </div>
        {/* Link to CombinedMenu.jsx */}
        <RouterLink to="/combined-menu" className="menuBtn" onClick={handleLinkClick}>
          OUR MENU
        </RouterLink>
      </div>
      <div
        className="hamburger"
        onClick={() => setShow(!show)}
        aria-expanded={show} // Accessibility improvement
        aria-label="Toggle Navigation"
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;

