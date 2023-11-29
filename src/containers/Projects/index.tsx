import Card from './Card';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { choreTrackerInfo } from 'components/Data/projectChoreTrackerInfo';
import { financeTrackerInfo } from 'components/Data/projectFinanceTrackerInfo';
import { porfolioInfo } from 'components/Data/projectPortfolioInfo';

const Projects = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <h3>select a Project</h3>
        </Route>

        <Route exact path={`${path}/ct`}>
          <Card data={choreTrackerInfo} />
        </Route>

        <Route exact path={`${path}/ft`}>
          <Card data={financeTrackerInfo} />
        </Route>

        <Route exact path={`${path}/re`}>
          <Card data={porfolioInfo} />
        </Route>
      </Switch>
    </>
  );
};

export default Projects;
