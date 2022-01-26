import { Wrapper, H1 } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";

function ResearchPage() {
  return (
    <Wrapper>
      <H1 bold>this is the research</H1>
      <div>
        <Link to="/">
          <Button text={"back to home"} back />
        </Link>
      </div>
      <div>
        <Link to="/survey">
          <Button text={"go to survey"} />
        </Link>
      </div>
    </Wrapper>
  );
}

export default ResearchPage;
