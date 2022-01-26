import { Wrapper, H1, AccentText, H1Light, H2 } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";

function SurveyPage() {
  return (
    <Wrapper>
      <H1 bold>this is the survey</H1>
      <H1Light>
        Your <AccentText color={"#719680"}>healing</AccentText> manifestation
      </H1Light>
      <H2>has been added to the queue and will be displayed soon!</H2>
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
