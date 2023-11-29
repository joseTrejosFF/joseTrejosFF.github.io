import NavbarMain from 'containers/NavbarMain';
import AboutMe from 'containers/AboutMe';
import Experience from 'containers/Experience';
import Home from 'containers/Home';
import Portfolio from 'containers/Portfolio';
import Skills from 'containers/Skills';
import NavbarPortfoliio from 'containers/NavbarPorfolio';
import Projects from 'containers/Projects';
import { FlexColContainer } from 'components/GlobalStyles';

type Props = {
  gui: {
    theme: string;
    themeToggle: () => void;
  };
};

export const MainWrapper = ({ gui }: Props) => (
  <>
    <NavbarMain gui={gui} />
    <FlexColContainer>
      <Home />
      <Skills />
      <Experience />
      <Portfolio />
      <AboutMe />
    </FlexColContainer>
  </>
);

export const PorfolioWrapper = ({ gui }: Props) => (
  <>
    <NavbarPortfoliio gui={gui} />
    <Projects />
  </>
);
