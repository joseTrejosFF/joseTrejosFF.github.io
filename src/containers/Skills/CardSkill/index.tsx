import { CardSkillContainer } from "./styles";

type Props = {
  data: {
    tools: string[];
    title: string;
    intro: string;
  };
};

const CardSkill = ({ data }: Props) => {
  return (
    <CardSkillContainer id="skills">
      <h2 className="title">{data.title}</h2>
      <p className="p-intro">{data.intro}</p>
      <ul className="tools">
        {data.tools.map((tool) => (
          <li key={tool}>
            <span>-</span> {tool}
          </li>
        ))}
      </ul>
    </CardSkillContainer>
  );
};

export default CardSkill;
