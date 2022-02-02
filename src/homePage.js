import { Wrapper, H1, H2, Text } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";
import { HomeContainer, TextContainer, ImageContainer } from "./styles/homePage.styles"
import Mockup from './assets/mockup.png';

function HomePage() {
  return (
    <Wrapper>
      <HomeContainer>
        <H1>Welcome to Lighten Up!</H1>
        <TextContainer>
          <H2>
            We invite you to use holistic light and color therapy to help you
            materialize desired feelings.
          </H2>
          <Link to="/survey">
            <Button text={"Enter the restorative space"} />
          </Link>
        </TextContainer>
        <TextContainer below>
          <Text>Curious about the research behind this project?</Text>
          <Link to="/research">
            <Button text={"Learn more"} />
          </Link>
        </TextContainer>
        <ImageContainer>
          <img src={Mockup} alt="Exhibition mockup" />
        </ImageContainer>
      </HomeContainer>
    </Wrapper>
  );
}

export default HomePage;
