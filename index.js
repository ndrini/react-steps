import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const yaml = require('js-yaml');
const fs = require('fs');

import './style.css';

// import the possible steps
const steps = require('./steps.json');
// const steps = require('./steps.yml');
// const steps = yaml.load(fs.readFileSync('steps.yaml', 'utf8'));

try {
  let fileContents = fs.readFileSync('./steps.yml', 'utf8');
  let data = yaml.safeLoad(fileContents);

  console.log(data);
} catch (e) {
  console.log(e);
}

console.log('bibbi');

/*
fs.readFile('./steps__.yml', (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});
*/
