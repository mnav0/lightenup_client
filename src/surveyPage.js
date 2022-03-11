import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Wrapper,
  Label,
  Input,
  Section,
  ButtonContainer
} from "./components/styled";
import Button from "./components/button/button";
import React from "react";
import queueService from "./services/queueService";
import { animationTypes } from "./constants/animationTypes";
import SurveyConfirmation from "./components/surveyConfirmation/surveyConfirmation";
import Dropdown from "./components/dropdown/dropdown";

function SurveyPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [selectedAnim, setSelectedAnim] = useState({});

  const addAnim = typeId => {
    queueService.addToQueue(typeId).then(response => console.log(response));
  };

  const onSubmit = data => {
    addAnim(animationTypes[data.desiredFeeling]);
    const selectedName = data.desiredFeeling;
    const selectedId = animationTypes[data.desiredFeeling];
    const selected = { id: selectedId, name: selectedName };
    setSelectedAnim(selected);
    setFormSubmitted(true);
  };
  return (
    <Wrapper>
      {!formSubmitted && (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Section>
            <Label htmlFor="curr-feeling">I'm feeling</Label>
            <Input name="curr-feeling" placeholder="write..." />
          </Section>
          <Section>
            <Label htmlFor="desired-feeling">I wish to manifest:</Label>
            <Dropdown
              animationTypes={animationTypes}
              register={register}
              setValue={setValue}
            />
          </Section>
          <ButtonContainer>
            <Button text={"Visualize"} type="submit" />
          </ButtonContainer>
        </form>
      )}
      {formSubmitted && (
        <SurveyConfirmation
          animName={selectedAnim.name}
          animId={selectedAnim.id}
        />
      )}
    </Wrapper>
  );
}

export default SurveyPage;
