import { useEffect, useState } from "react";
import { Wrapper, H1, AccentText, H1Light, H2 } from "./components/styled";
import { Link } from "react-router-dom";
import Button from "./components/button/button";
import React from "react";
import queueService from "./services/queueService";

function SurveyPage() {
  const [animationQueue, setAnimationQueue] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const addAnim = typeId => {
    queueService
      .addToQueue(typeId)
      .then(response => console.log(response));
  };

  useEffect(() => {
    queueService
      .getQueue()
      .then(response => setAnimationQueue(response))
      .finally(() => setLoading(false));
  }, []);

  return (
    !loading ?
      <Wrapper>
        <H1 bold>this is the survey</H1>
        <button onClick={() => addAnim(14)}>add healing anim to queue (refresh after)</button>
        <H2>Animations in queue:</H2>
        {animationQueue.map((anim, i) => {
          return <p key={i}>{anim.type}</p>
          })
        }
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
      :
      <></>
  );
}

export default SurveyPage;
