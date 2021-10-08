import { MainWrapper, PorfolioWrapper } from "wrappers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "utils/themes";
import useDarkTheme from "hooks/useDarkTheme";
import Footer from "containers/Footer";

export default function App() {
  const [theme, themeToggle] = useDarkTheme();

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <MainWrapper gui={{ theme, themeToggle }} />
          </Route>
          <Route path="/portfolio">
            <PorfolioWrapper gui={{ theme, themeToggle }} />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}
