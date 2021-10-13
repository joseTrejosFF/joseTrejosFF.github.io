import Header from "components/Header";

type Props = {
  gui: { theme: string; themeToggle: () => void };
};

const NavbarPortfoliio = ({ gui }: Props) => {
  const links = [
    ["ct", "Chore Tracker"],
    ["ft", "Finance Tracker"],
    ["re", "Resume"],
  ];

  return <Header links={links} gui={gui} />;
};

export default NavbarPortfoliio;
