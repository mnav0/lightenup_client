import { Wrapper } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";

function SurveyPage() {
  return (
    <Wrapper>
      <h1>this is the survey</h1>
      <div>
        <Link to="/">
          <Button text={"back to home"} back />
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

export default SurveyPage;
