let React = require('react');

let GreeterForm = require('GreeterForm');
let GreeterMessage = require('GreeterMessage');

let Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name:     'React',
      message:  'This is from a component'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  _handleNewData: function(updates) {
      this.setState(updates);
  },
  render: function() {
    let name = this.state.name;
    let message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this._handleNewData} />
      </div>
    );
  }
});

module.exports = Greeter;
