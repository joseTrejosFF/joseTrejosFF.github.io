import GreetingCard from "containers/Home/GreetingCard";
import PersonalCard from "containers/Home/PersonalCard";
import { HomeContainer } from "./styles";

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <PersonalCard />
      <GreetingCard />
    </HomeContainer>
  );
};

export default Home;
