import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// import the possible steps
const steps = require('./steps.json');
// console.log(steps);

/**
 * Provide the main page Component that shows
 * description and the choices
 *
 * "step" it actual step, and defines the page to show by the code (of type string)
 */
function Step() {
  const [step, setStep] = useState('0');
  console.log('_________ step', step);

  // obtain the full object for actual step
  let step_obj = steps.find(function (element) {
    return element.code == step;
  });

  console.log('_______________ step_obj', step_obj);

  function handleChoice(code) {
    // console.log('handleChoice code value: ', code);
    setStep(code);
  }

  function ChoiceButton(props) {
    return (
      <button className="button_green" onClick={() => handleChoice(props.code)}>
        {props.code} {props.description}
      </button>
    );
  }

  function BackButton(props) {
    return (
      <button className="button_blue" onClick={() => handleChoice(props.code)}>
        {props.code} {props.description}
      </button>
    );
  }

  return (
    <div>
      <h1>Title: {step_obj.title}</h1>
      <p>Description: {step_obj.description}</p>

      {step_obj.choices.map((singleChoice) => (
        <ChoiceButton
          description={singleChoice.description}
          code={singleChoice.code}
        />
      ))}

      <BackButton description="start again" code="0" />
    </div>
  );
}

const el = <Step />;
ReactDOM.render(el, document.getElementById('root'));
