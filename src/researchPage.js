import { Wrapper } from "./components/styled";
import { Link } from "react-router-dom";

function ResearchPage() {
  return (
    <Wrapper>
      <h1>this is the research</h1>
      <div>
        <Link to="/">go to home</Link>
      </div>
      <div>
        <Link to="/research">go to research</Link>
      </div>
    </Wrapper>
  );
}

export default ResearchPage;
