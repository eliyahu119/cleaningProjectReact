
import React from 'react'
import buttons from '../styling/buttons.module.css'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.props.setItems(this.props.items.push(this.state.value));
      event.preventDefault();
    }
  
    render() {
      return (
       <div>
        <h1>{this.state.value}</h1>
          <label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button  className={buttons.addButton} onClick={this.handleSubmit}>הוסף אלמנט</button>
        </div>
      );
    }
  }
  export default NameForm 