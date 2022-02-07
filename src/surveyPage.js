import { useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper, Label } from "./components/styled";
import Button from "./components/button/button";
import React from "react";
import queueService from "./services/queueService";
import { animationTypes } from "./constants/animationTypes"
import SurveyConfirmation from "./components/surveyConfirmation/surveyConfirmation";

function SurveyPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const [selectedAnim, setSelectedAnim] = useState({});
  
  const addAnim = typeId => {
    queueService
      .addToQueue(typeId)
      .then(response => console.log(response));
  };

  // const deleteAnim = typeId => {
  //   queueService
  //     .deleteFromQueue(typeId)
  //     .then(response => console.log(response));
  // };

  const onSubmit = (data) => {
    addAnim(animationTypes[data.desiredFeeling])
    const selectedName = data.desiredFeeling
    const selectedId = animationTypes[data.desiredFeeling]
    const selected = { id: selectedId, name: selectedName }
    setSelectedAnim(selected)
    setFormSubmitted(true)
  }

  return (
    <Wrapper>
      {!formSubmitted && 
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="curr-feeling">I'm feeling</Label>
          <input name="curr-feeling"></input>
          <Label htmlFor="desired-feeling">I wish to manifest:</Label>
          <select id="desired-feeling" name="desired-feeling" defaultValue={""}
            {...register("desiredFeeling", { required: true })}>
            <option hidden disabled value=""></option>
            {Object.keys(animationTypes).map((a, i) => {
              return <option value={a} key={i}>{a}</option>
            })}
          </select>
          <Button text={"Visualize"} type="submit"/>
        </form>
      }
      {formSubmitted &&
        <SurveyConfirmation animName={selectedAnim.name} animId={selectedAnim.id} />
      }
    </Wrapper>
  );
}

export default SurveyPage;
