import { Wrapper , ExternalLink } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";
import Header from "./components/header/header";
import ColorBlock from "./components/colorBlock/colorBlock";
import { BlockContainer } from "./components/colorBlock/colorBlock.styles";

function ResearchPage() {
  return (
    <Wrapper>
      <Header
        text={"Color Theory"}
        subtext={"Learn more about the meaning behind each color palette and our research sources."}
      />
      <BlockContainer>
      <ColorBlock
        emotion={"relax, de-stress, calm, attention"}
        color1={"#D9E5F3"}
        color2={"#B2D3ED"}
        color3={"#B2B5D9"}
        color4={"#296CA0"}
      />
      <ColorBlock
<<<<<<< HEAD
        emotion={"creativity, inspiration"}
        color1={"#FDE8C0"}
        color2={"#CFC8F8"}
        color3={"#FCC663"}
        color4={"#70669D"}
      />
      <ColorBlock
        emotion={"healing, pain relief, comfort"}
        color1={"#E7F9C3"}
        color2={"#ACDCD1"}
        color3={"#97CD80"}
        color4={"#719680"}
=======
        emotion={"healing, pain relief, comfort"}
        color1={"#E7F9C3"}
        color2={"#ACDCD1"}
        color3={"#97CD80"}
        color4={"#719680"}
      />
      <ColorBlock
        emotion={"joy, energy, positivity"}
        color1={"#FFFFA2"}
        color2={"#F6E7A4"}
        color3={"#FEBB3D"}
        color4={"#D46C00"}
>>>>>>> Changes to research page.
      />
      <ColorBlock      
      emotion={"strength, courage, focus"}
        color1={"#FFA5A4"}
        color2={"#D78F8E"}
        color3={"#BABABA"}
        color4={"#565656"}
        /> 
      <ColorBlock
<<<<<<< HEAD
        emotion={"joy, energy, positivity"}
        color1={"#FFFFA2"}
        color2={"#F6E7A4"}
        color3={"#FEBB3D"}
        color4={"#D46C00"}
=======
        emotion={"creativity, inspiration"}
        color1={"#FDE8C0"}
        color2={"#CFC8F8"}
        color3={"#FCC663"}
        color4={"#70669D"}
      />
      <ColorBlock
        emotion={"strength, courage, focus"}
        color1={"#FFA5A4"}
        color2={"#D78F8E"}
        color3={"#BABABA"}
        color4={"#565656"}
>>>>>>> Changes to research page.
      />
      </BlockContainer>
      <p>Sources</p>
<<<<<<< HEAD
        <ExternalLink target="_blank" href={ 
            "http://www.arttherapyblog.com/online/color-psychology-psychologica-effects-of-colors/#.YYLxU73MK58."}>
          <p>
            Says, Deborah, et al. “Color Psychology: The Psychological Effects of
          Colors.” Art Therapy, 24 Dec. 2012,
          </p>
        </ExternalLink>
        <ExternalLink target="_blank" href={"https://journals.sagepub.com/doi/full/10.1177/2158244014525423"}>
          <p>
          Sevinc Kurt, Kelechi Kingsley Osueke. “The Effects of Color on the
          Moods of College Students - Sevinc Kurt, Kelechi Kingsley Osueke,
          2014.” SAGE Journals,
          </p>
        </ExternalLink>
      <ExternalLink target="_blank" href={"https://www.verywellmind.com/color-psychology-2795824"}>
          <p>
          Cherry, Kendra. “Can Color Affect Your Mood and Behavior?” Verywell
          Mind, Verywell Mind, 28 May 2020,
          </p>
      </ExternalLink>
=======
      <p>
        <a
          href={
            "http://www.arttherapyblog.com/online/color-psychology-psychologica-effects-of-colors/#.YYLxU73MK58."
          }
        >
          {" "}
          Says, Deborah, et al. “Color Psychology: The Psychological Effects of
          Colors.” Art Therapy, 24 Dec. 2012,
        </a>
      </p>
      <p>
        <a
          href={
            "https://journals.sagepub.com/doi/full/10.1177/2158244014525423"
          }
        >
          {" "}
          Sevinc Kurt, Kelechi Kingsley Osueke. “The Effects of Color on the
          Moods of College Students - Sevinc Kurt, Kelechi Kingsley Osueke,
          2014.” SAGE Journals,
        </a>
      </p>
      <p>
        <a href= {"https://www.verywellmind.com/color-psychology-2795824"}>
          {" "}
          Cherry, Kendra. “Can Color Affect Your Mood and Behavior?” Verywell
          Mind, Verywell Mind, 28 May 2020,
        </a>
      </p>
>>>>>>> Changes to research page.
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
