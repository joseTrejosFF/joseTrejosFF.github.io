import Header from "components/Header";
import { Link, useRouteMatch } from "react-router-dom";

type Props = {
  gui: { theme: string; themeToggle: () => void };
};

const NavbarPortfoliio = ({ gui }: Props) => {
  let { url } = useRouteMatch();

  const options = (
    <>
      <li>
        <Link to={`${url}/ct`}>Chore T</Link>
      </li>
      <li>
        <Link to={`${url}/ft`}>Finance T</Link>
      </li>
      <li>
        <Link to={`${url}/re`}>Web Resume</Link>
      </li>
    </>
  );

  return <Header options={options} gui={gui} />;
};

export default NavbarPortfoliio;
