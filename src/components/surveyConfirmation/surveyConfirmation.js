import { H1Light, AccentText, H2 } from "../styled";
import { ImageContainer, PreviewImage, ConfirmationContent, TextContainer } from "./surveyConfirmation.styles"
import { Link } from "react-router-dom";
import AnimPreview4 from "../../assets/animPreview_4.png";
import AnimPreview14 from "../../assets/animPreview_14.png";
import AnimPreview24 from "../../assets/animPreview_24.png";
import AnimPreview34 from "../../assets/animPreview_34.png";
import AnimPreview44 from "../../assets/animPreview_44.png";
import Button from "../button/button";

const SurveyConfirmation = ({ animName, animId }) => {
  const animPreviews = { 4: AnimPreview4, 14: AnimPreview14, 24: AnimPreview24, 34: AnimPreview34, 44: AnimPreview44 }
  
  return (
    <>
        <H1Light>
            Your <AccentText color={"#719680"}>{animName}</AccentText> manifestation
        </H1Light>
        <H2>has been added to the queue and will be displayed soon!</H2>
        <ConfirmationContent>
            <ImageContainer>
                <PreviewImage src={animPreviews[animId]} alt={`Animation screenshot for ${animName}`} />
            </ImageContainer>
            <TextContainer>
                <div>
                    <H2>Curious about how we selected this color based off of your input?</H2>
                    <Link to="/research">
                        <Button text={"Learn more"}></Button>
                    </Link>
                </div>
                <Link to="/">
                    <Button text={"Back to home"} back></Button>
                </Link>
            </TextContainer>
        </ConfirmationContent>
    </>
  );
};

export default SurveyConfirmation;
