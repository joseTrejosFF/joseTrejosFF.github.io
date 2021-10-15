import { GreetingCardContainer } from "./styles";

const GreetingCard = (): JSX.Element => {
  return (
    <GreetingCardContainer>
      <h1 className="title">Hi there!</h1>
      <p>
        I'm Jose, a software developer that enjoys solving problems using code{" "}
        <span className="emoji">&#x1f4bb;</span>
      </p>

      <p>I guess you wanna know something about me. If so, stay tuned.</p>
      <p>On the "Quick Start" section I could say that:</p>

      <ul className="ul-quick-Start">
        <li>
          <p>
            I'm a cat person <span className="emoji">&#x1F408;</span>
          </p>
        </li>
        <li>
          <p>
            I love videogames <span className="emoji">&#127918;</span>
          </p>
        </li>
        <li>
          <p>
            I like riding my motorcycle <span className="emoji">&#x1F3CD;</span>
          </p>
        </li>
      </ul>
      <p>Wanna know more? Keep scrolling.</p>
    </GreetingCardContainer>
  );
};

export default GreetingCard;
