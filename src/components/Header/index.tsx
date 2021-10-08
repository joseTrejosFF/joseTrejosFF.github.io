import * as React from "react";
import { Link } from "react-router-dom";

import Button from "components/Button";
import { v4 as uuidv4 } from "uuid";
import { NavbarContainer, MobileNavbarContainer } from "./styles";

type Props = {
  data?: string[][];
  gui: {
    theme: string;
    themeToggle: () => void;
  };
  options?: JSX.Element;
};

const Header = ({ data, gui, options }: Props): JSX.Element => {
  const [isShowNavbar, SetIsShowNavbar] = React.useState(false);

  const ToggleMobileNavbar = () => {
    SetIsShowNavbar(!isShowNavbar);
  };

  return (
    <header>
      <nav>
        <ul>
          <NavbarContainer>
            <Link to="/" className="home-icon" title="Home">
              <i className="fas fa-home" />
            </Link>

            {options}

            {gui.theme === "dark" ? (
              <li>
                <Button
                  value={<i className="fas fa-sun"></i>}
                  onClick={gui.themeToggle}
                  tooltiptext="Light Mode"
                />
              </li>
            ) : (
              <li>
                <Button
                  value={<i className="fas fa-moon"></i>}
                  onClick={gui.themeToggle}
                  tooltiptext="Dark Mode"
                />
              </li>
            )}
          </NavbarContainer>
        </ul>

        <MobileNavbarContainer>
          <Button
            value={<i className="fas fa-bars" />}
            onClick={ToggleMobileNavbar}
            tooltiptext="Menu"
          />

          {isShowNavbar && (
            <div className="options" onClick={ToggleMobileNavbar}>
              <ul>
                {/* {data.map((tab) => (
                  <li key={tab[0]}>
                    <a
                      href={tab[1]}
                      onClick={ToggleMobileNavbar}
                      className="option"
                    >
                      <p className="option">{tab[0]}</p>
                    </a>
                  </li>
                ))} */}
                <li>
                  <p className="option" onClick={gui.themeToggle}>
                    Turn {gui.theme === "dark" ? `Light` : `Dark`} Mode On
                  </p>
                </li>
              </ul>
            </div>
          )}
        </MobileNavbarContainer>
      </nav>
    </header>
  );
};
export default Header;
