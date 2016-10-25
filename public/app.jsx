let React = require('react');
let ReactDOM = require('react-dom');

let Greeter = require('Greeter');

ReactDOM.render(
  <Greeter name="Dan" message="What's happening?"/>,
  document.getElementById('app')
);
