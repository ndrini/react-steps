import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

console.log("Let's start!");

const data = require('./steps.json');
console.log(data);

function Step() {
  // step defines the page to show by the code (of type string)
  const [step, setStep] = useState('0');

  console.log(`the actual step ${step}`);

  console.log(`the state ${data.steps}`);


  let found = data.steps.find(function (element) {
    return element.code == step;
  });

  // Printing desired values.
  console.log("found object (it should be just one!!!)", found);

  // console.log(data.filter(obj => {return obj.code === step}))
  // console.log(data.find(function (x) {x.code === step}))

  // function updateStep () { setStep } (update step)

  // setEffect (update page on press button)

  return (
    <div>
      The page content
      {data.steps[0].title}
      <button className="item"> Choice 1</button>
      <button className="item"> Choice 2</button>
    </div>
  );
}

/*
function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <Step />
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
} */

// const el = <AddForm />;
const el = <Step />;
ReactDOM.render(el, document.getElementById('root'));
