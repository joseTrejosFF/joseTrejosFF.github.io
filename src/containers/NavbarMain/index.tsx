import Header from 'components/Header';

type Props = {
  gui: { theme: string; themeToggle: () => void };
};

const NavbarMain = ({ gui }: Props) => {
  const innerLinks = [
    ['Skills', 'skills'],
    ['Experience', 'experience'],
    ['Portfolio', 'portfolio'],
    ['About Me', 'aboutme'],
  ];

  return <Header innerLinks={innerLinks} gui={gui} />;
};

export default NavbarMain;
