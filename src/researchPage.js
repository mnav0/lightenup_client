import { Wrapper } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";
import Header from "./components/header/header";
import ColorBlock from "./components/colorBlock/colorBlock";

function ResearchPage() {
  return (
    <Wrapper>
      <Header
        text={"Color Theory"}
        subtext={
          "Learn more about the meaning behind each color palette and our research sources."
        }
      />
      <ColorBlock
        text={"relax, de-stress, calm, attention"}
        string1={"#D9E5F3"}
        string2={"#B2D3ED"}
        string3={"#B2B5D9"}
        string4={"#296CA0"}
      />
      <ColorBlock
        text={"healing, pain relief, comfort"}
        string1={"#E7F9C3"}
        string2={"#ACDCD1"}
        string3={"#97CD80"}
        string4={"#719680"}
      />
      <ColorBlock
        text={"joy, energy, positivity"}
        string1={"#FFFFA2"}
        string2={"#F6E7A4"}
        string3={"#FEBB3D"}
        string4={"#D46C00"}
      />
      <ColorBlock
        text={"creativity, inspiration"}
        string1={"#FDE8C0"}
        string2={"#CFC8F8"}
        string3={"#FCC663"}
        string4={"#70669D"}
      />
      <ColorBlock
        text={"strength, courage, focus"}
        string1={"#FFA5A4"}
        string2={"#D78F8E"}
        string3={"#BABABA"}
        string4={"#565656"}
      />
      <p>Sources</p>
      <p>
        Says, Deborah, et al. “Color Psychology: The Psychological Effects of
        Colors.” Art Therapy, 24 Dec. 2012,
        http://www.arttherapyblog.com/online/color-psychology-psychologica-effects-of-colors/#.YYLxU73MK58.{" "}
      </p>
      <p>
        Sevinc Kurt, Kelechi Kingsley Osueke. “The Effects of Color on the Moods
        of College Students - Sevinc Kurt, Kelechi Kingsley Osueke, 2014.” SAGE
        Journals,
        https://journals.sagepub.com/doi/full/10.1177/2158244014525423.{" "}
      </p>
      <p>
        Cherry, Kendra. “Can Color Affect Your Mood and Behavior?” Verywell
        Mind, Verywell Mind, 28 May 2020,
        https://www.verywellmind.com/color-psychology-2795824.{" "}
      </p>
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
