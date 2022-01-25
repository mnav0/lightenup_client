import { Wrapper } from "./components/styled";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Wrapper>
      <h1>this is the homepage</h1>
      <div>
        <Link to="/survey">go to survey</Link>
      </div>
      <div>
        <Link to="/research">go to research</Link>
      </div>
    </Wrapper>
  );
}

export default HomePage;
