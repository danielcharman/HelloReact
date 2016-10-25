let React = require('react');

let GreeterForm = React.createClass({
  _onFormSubmit: function(event) {
    event.preventDefault();

    let updates = {};
    let name = this.refs.name.value;
    let message = this.refs.message.value;

    if(name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function() {
    return (
      <form onSubmit={this._onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Name..." />
        </div>
        <div>
          <textarea type="text" ref="message" placeholder="Message..."></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
