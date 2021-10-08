import { CardExpContainer } from "./styles";
import { v4 as uuidv4 } from "uuid";

interface Props {
  data: {
    company: {
      name: string;
      location: string;
    };
    job: {
      date: string;
      position: string;
      description: string[];
    };
  };
}

const CardExp = ({ data }: Props) => {
  return (
    <CardExpContainer>
      <div className="company-info">
        <h5 className="date">{data.job.date}</h5>
        <h5 className="job-position">{data.job.position}</h5>
        <p className="company-name">{data.company.name}</p>
        <p className="company-location">{data.company.location}</p>
      </div>
      <ul className="job-description">
        {data.job.description.map((paragraph) => (
          <li key={uuidv4()}>
            <p>
              <span>-</span> {paragraph}
            </p>
          </li>
        ))}
      </ul>
    </CardExpContainer>
  );
};

export default CardExp;
