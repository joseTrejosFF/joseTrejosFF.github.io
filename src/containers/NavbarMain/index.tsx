import Header from "components/Header";

type Props = {
  gui: { theme: string; themeToggle: () => void };
};

const NavbarMain = ({ gui }: Props) => {
  const innerLinks = [
    ["About Me", "aboutme"],
    ["Portfolio", "portfolio"],
    ["Skills", "skills"],
    ["Experience", "experience"],
  ];

  return <Header innerLinks={innerLinks} gui={gui} />;
};

export default NavbarMain;
