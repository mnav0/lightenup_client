import { H1Light, AccentText, H2 } from "../styled";

const SurveyConfirmation = ({ animChoice }) => {
  return (
    <>
        <H1Light>
            Your <AccentText color={"#719680"}>{animChoice}</AccentText> manifestation
        </H1Light>
        <H2>has been added to the queue and will be displayed soon!</H2>
    </>
  );
};

export default SurveyConfirmation;
