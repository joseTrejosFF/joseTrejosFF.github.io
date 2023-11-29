import { porfolioInfo } from 'components/Data/portfolioInfo';
import { PortfolioContainer } from './styles';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const Portfolio = (): JSX.Element => {
  return (
    <PortfolioContainer id='portfolio'>
      <h2 className='title'>What I've been working on</h2>
      <p>
        I like to keep up with new technologies and always have a project in
        progress. Take a look at some of my recent personal projects.
      </p>
      {porfolioInfo.map((project) => (
        <Card key={uuidv4()} data={project} />
      ))}
    </PortfolioContainer>
  );
};

export default Portfolio;
