import { CardContainer, LinkRowSection } from "./styles";
import { Link } from "react-router-dom";

type Props = {
  data: {
    title: string;
    urlRepo?: string;
    pictureRepo: string;
    pictureRepo2?: string;
    figcaption: string;
    altRepo: string;
    liveDemoUrl?: string;
    figmaURL?: string;
    readMoreURL: string;
    shortDesc: string;
  };
};

const Card = ({ data }: Props) => {
  return (
    <CardContainer>
      <div className="info-container">
        <h3 className="title">{data.title}</h3>
        <p className="description">
          {data.shortDesc}
          <Link to={data.readMoreURL}>READ MORE</Link>
        </p>
        <LinkRowSection>
          {data.urlRepo && (
            <a
              href={data.urlRepo}
              target="_blank"
              rel="noreferrer"
              title={`Visit ${data.title} Repository on Github`}
            >
              <i className="fab fa-github" />
            </a>
          )}
          {data.liveDemoUrl && (
            <a
              href={data.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              title={`Visit ${data.title} Live Demo`}
            >
              <i className="fas fa-desktop" />
            </a>
          )}
          {data.figmaURL && (
            <a
              href={data.figmaURL}
              target="_blank"
              rel="noreferrer"
              title={`Visit ${data.title} Figma Project`}
            >
              <i className="fab fa-figma" />
            </a>
          )}
        </LinkRowSection>
      </div>
      <figure className="pic-container">
        <Link to={data.readMoreURL}>
          <img
            src={data.pictureRepo}
            alt={data.altRepo}
            title={data.figcaption}
          />
          {data.pictureRepo2 && (
            <img
              src={data.pictureRepo2}
              alt={data.altRepo}
              title={data.figcaption}
            />
          )}
        </Link>
        <figcaption>
          <p>{data.figcaption}</p>
        </figcaption>
      </figure>
    </CardContainer>
  );
};

export default Card;
