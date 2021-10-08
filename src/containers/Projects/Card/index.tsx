import useIsLoading from "hooks/useIsLoading";
import { v4 as uuidv4 } from "uuid";

import {
  ProjectContainer,
  IntroContainer,
  RowSectionContainer,
  ColSectionContainer,
} from "./styles";

type Props = {
  data: {
    projectTitle: string;
    intro: {
      paragraphs: string[];
      figure: {
        img: string;
        alt: string;
        title: string;
        caption: JSX.Element | string;
      };
    };
    projectPurpose: {
      title: string;
      paragraphs: string[];
    };
    chosenWebStack: {
      title: string;
      paragraphs: string[];
      tools: string[];
      figure: {
        img: string;
        alt: string;
        title: string;
        caption: string | JSX.Element;
      };
    };
    ChallengesAndDif: {
      title: string;
      paragraphs: string[];
      figure: {
        img: string;
        alt: string;
        title: string;
        caption: string | JSX.Element;
      };
    };
    lessonsLearned: {
      title: string;
      paragraphs: string[];
    };
  };
};

const Card = ({ data }: Props): JSX.Element => {
  const isLoading = useIsLoading();

  if (isLoading) return <div>Loading</div>;

  return (
    <ProjectContainer>
      <IntroContainer>
        <h1 className="heading-1 h-main-title">{data.projectTitle}</h1>

        {data.intro.paragraphs.map((paragraph) => (
          <p key={uuidv4()} className="p-intro">
            {paragraph}
          </p>
        ))}

        <figure className="img-container">
          <img
            className="img-intro"
            src={data.intro.figure.img}
            alt={data.intro.figure.alt}
            title={data.intro.figure.title}
          />
          <figcaption>
            <p>{data.intro.figure.caption}</p>
          </figcaption>
        </figure>
      </IntroContainer>

      <ColSectionContainer>
        <h2 className=" heading-2 h-project-purpose">
          {data.projectPurpose.title}
        </h2>

        {data.projectPurpose.paragraphs.map((paragraph) => (
          <p key={uuidv4()} className="p-project-purpose">
            {paragraph}
          </p>
        ))}
      </ColSectionContainer>

      <h2 className=" heading-2 h-chosen-web-stack">
        {data.chosenWebStack.title}
      </h2>
      <RowSectionContainer>
        <div className="chosen-web-stack">
          {data.chosenWebStack.paragraphs.map((paragraph) => (
            <p key={uuidv4()} className="p-chosen-web-stack">
              {paragraph}
            </p>
          ))}

          <ul className="ul-chosen-web-stack">
            {data.chosenWebStack.tools.map((tool) => (
              <li key={uuidv4()}>
                <p>
                  <span>- </span>
                  {tool}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="img-container">
          <img
            src={data.chosenWebStack.figure.img}
            alt={data.chosenWebStack.figure.alt}
            loading="lazy"
            title={data.chosenWebStack.figure.title}
          />
          <figcaption className="sources">
            <p>{data.chosenWebStack.figure.caption}</p>
          </figcaption>
        </figure>
      </RowSectionContainer>

      <h2 className="heading-2 h-challenges-Difficulties">
        {data.ChallengesAndDif.title}
      </h2>

      <RowSectionContainer>
        <div className="challenges-Difficulties">
          {data.ChallengesAndDif.paragraphs.map((paragraph) => (
            <p key={uuidv4()} className="p-challenges-Difficulties">
              {paragraph}
            </p>
          ))}
        </div>

        <figure className="img-container">
          <img
            src={data.ChallengesAndDif.figure.img}
            alt={data.ChallengesAndDif.figure.alt}
            loading="lazy"
            title={data.ChallengesAndDif.figure.title}
          />
          <figcaption>
            <p>{data.ChallengesAndDif.figure.caption}</p>
          </figcaption>
        </figure>
      </RowSectionContainer>

      <ColSectionContainer>
        <h2 className=" heading-2 h-lessons-learned">
          {data.lessonsLearned.title}
        </h2>

        {data.lessonsLearned.paragraphs.map((paragraph) => (
          <p key={uuidv4()} className="p-lessons-learned">
            {paragraph}
          </p>
        ))}
      </ColSectionContainer>
    </ProjectContainer>
  );
};

export default Card;
