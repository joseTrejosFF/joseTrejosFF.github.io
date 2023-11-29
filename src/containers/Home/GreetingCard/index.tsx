import { GreetingCardContainer } from './styles';

const GreetingCard = (): JSX.Element => {
  return (
    <GreetingCardContainer>
      <h1 className='title'>Hi there!</h1>
      <p>
        I am a dedicated software developer with a primary focus on delivering
        tailored solutions to enterprise clients, enabling them to achieve their
        business objectives seamlessly.
      </p>
      <p>
        As a reliable team player, I thrive in collaborative environments,
        leveraging my technical expertise to contribute effectively to project
        success.
      </p>
      <p>
        I am passionate about staying abreast of industry-proven technologies,
        ensuring that the solutions I provide are not only innovative but also
        aligned with client’s requirements.
      </p>
    </GreetingCardContainer>
  );
};

export default GreetingCard;
