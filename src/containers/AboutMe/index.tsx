import { aboutMeInfo } from "components/Data/aboutMeInfo";
import { v4 as uuidv4 } from "uuid";
import { AboutMeContainer } from "./styles";

const AboutMe = (): JSX.Element => {
  return (
    <AboutMeContainer id="aboutme">
      <h2 className="title">{aboutMeInfo.title}</h2>
      {aboutMeInfo.body.map((paragrah) => (
        <p key={uuidv4()}>{paragrah}</p>
      ))}
    </AboutMeContainer>
  );
};

export default AboutMe;
