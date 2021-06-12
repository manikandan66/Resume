import React, { useState, useRef, useEffect } from "react";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const wrapperRef = useRef(null);

  const navbarList = [
    {
      name: "home",
      label: "Home",
    },
    {
      name: "about",
      label: "About",
    },
    {
      name: "skills",
      label: "Skills",
    },
    {
      name: "contact",
      label: "Contact",
    },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
    // eslint-disable-next-line
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu.name);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#/" className="nav__logo">
            Manikandan
          </a>
        </div>

        <div className={`nav__menu ${showMenu ? "show" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {navbarList &&
              navbarList.map((item, idx) => (
                <li key={idx} className="nav__item">
                  <a
                    onClick={() => handleMenuClick(item)}
                    href={`#${item.name}`}
                    className={`nav__link ${
                      item.name === activeMenu ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div
          className="nav__toggle"
          ref={wrapperRef}
          onClick={toggleMenu}
          id="nav-toggle"
        >
          <i className={`bx ${showMenu ? "bx-x" : "bx-menu"}`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
