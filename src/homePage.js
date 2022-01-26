import { Wrapper, H1, H2 } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";

function HomePage() {
  return (
    <Wrapper>
      <H1>this is the homepage</H1>
      <H2>
        We invite you to use holistic light and color therapy to help you
        materialize desired feelings.
      </H2>
      <div>
        <Link to="/survey">
          <Button text={"go to survey"} />
        </Link>
      </div>
      <div>
        <Link to="/research">
          <Button text={"go to research"} />
        </Link>
      </div>
    </Wrapper>
  );
}

export default HomePage;
