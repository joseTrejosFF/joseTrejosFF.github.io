import { jobExpInfo } from "components/Data/jobExpInfo";
import CardExp from "containers/Experience/CardExp";
import { v4 as uuidv4 } from "uuid";

import { ExperienceContainer } from "./styles";

const Experience = (): JSX.Element => {
  return (
    <ExperienceContainer id="experience">
      <h2>Experience</h2>

      {jobExpInfo.map((job) => (
        <CardExp key={uuidv4()} data={job} />
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
