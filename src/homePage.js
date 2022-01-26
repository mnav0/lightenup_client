import { Wrapper } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";

function HomePage() {
  return (
    <Wrapper>
      <h1>this is the homepage</h1>
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
