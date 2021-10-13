import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Link as InnerLink } from "react-scroll";
import Button from "components/Button";
import { NavbarContainer, MobileNavbarContainer } from "./styles";

type Props = {
  gui: {
    theme: string;
    themeToggle: () => void;
  };
  innerLinks?: string[][];
  links?: string[][];
};

const Header = ({ gui, innerLinks, links }: Props): JSX.Element => {
  const [isShowMobileNav, SetIsShowNavbar] = React.useState(false);

  let { url } = useRouteMatch();

  const ToggleMobileNavbar = () => {
    SetIsShowNavbar(!isShowMobileNav);
  };

  return (
    <ul>
      <NavbarContainer>
        <li>
          <Link to="/" className="home-icon" title="Home">
            <p>
              <i className="fas fa-home" />
            </p>
          </Link>
        </li>

        {innerLinks &&
          innerLinks.map((link) => (
            <li key={link[1]}>
              <InnerLink
                activeClass="active"
                to={link[1]}
                spy={true}
                smooth={false}
                duration={500}
              >
                <p>{link[0]}</p>
              </InnerLink>
            </li>
          ))}

        {links &&
          links.map((link) => (
            <li key={link[0]}>
              <Link to={`${url}/${link[0]}`}>
                <p>{link[1]}</p>
              </Link>
            </li>
          ))}

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

      <MobileNavbarContainer>
        <Button
          value={<i className="fas fa-bars" />}
          onClick={ToggleMobileNavbar}
          tooltiptext="Menu"
        />

        {isShowMobileNav && (
          <ul className="options" onClick={ToggleMobileNavbar}>
            <li>
              <Link to="/" className="home-icon" title="Home">
                <p>
                  <i className="fas fa-home" />
                </p>
              </Link>
            </li>

            {innerLinks &&
              innerLinks.map((link) => (
                <li key={link[1]}>
                  <InnerLink
                    activeClass="active"
                    to={link[1]}
                    spy={true}
                    smooth={false}
                    duration={500}
                  >
                    <p onClick={ToggleMobileNavbar}>{link[0]}</p>
                  </InnerLink>
                </li>
              ))}

            {links &&
              links.map((link) => (
                <li key={link[0]}>
                  <Link to={`${url}/${link[0]}`}>
                    <p>{link[1]}</p>
                  </Link>
                </li>
              ))}

            <li>
              <p className="option" onClick={gui.themeToggle}>
                Turn {gui.theme === "dark" ? `Light` : `Dark`} Mode On
              </p>
            </li>
          </ul>
        )}
      </MobileNavbarContainer>
    </ul>
  );
};
export default Header;
