import { useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper, H1, AccentText, H1Light, Label, H2 } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";
import React from "react";
import queueService, { deleteFromQueue } from "./services/queueService";
import { animationTypes } from "./constants/animationTypes"
import SurveyConfirmation from "./components/surveyConfirmation/surveyConfirmation";

function SurveyPage() {
  const [animationQueue, setAnimationQueue] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const addAnim = typeId => {
    queueService
      .addToQueue(typeId)
      .then(response => console.log(response));
  };

  const deleteAnim = typeId => {
    queueService
      .deleteFromQueue(typeId)
      .then(response => console.log(response));
  };

  const onSubmit = (data) => {
    addAnim(animationTypes[data.desiredFeeling])
    setFormSubmitted(true)
  }

  return (
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="curr-feeling">I'm feeling</Label>
          <input name="curr-feeling"></input>
          <Label htmlFor="desired-feeling">I wish to manifest:</Label>
          <select id="desired-feeling" name="desired-feeling" {...register("desiredFeeling", { required: true })}>
            <option hidden disabled selected value> -- select an option -- </option>
            {Object.keys(animationTypes).map((a, i) => {
              return <option value={a} key={i}>{a}</option>
            })}
          </select>
          <Button text={"Visualize"} type="submit"/>
        </form>
        <SurveyConfirmation />
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
