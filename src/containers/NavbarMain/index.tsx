import Header from "components/Header";
import NavItem from "./NavItem";

type Props = {
  gui: { theme: string; themeToggle: () => void };
};

const NavbarMain = ({ gui }: Props) => {
  const innerLinksData = [
    ["About Me", "aboutme"],
    ["Portfolio", "portfolio"],
    ["Skills", "skills"],
    ["Experience", "experience"],
  ];

  const NavItems = (
    <>
      {innerLinksData.map((link) => (
        <li key={link[1]}>
          <NavItem to={link[1]} value={link[0]} />
        </li>
      ))}
    </>
  );

  return <Header options={NavItems} gui={gui} />;
};

export default NavbarMain;
