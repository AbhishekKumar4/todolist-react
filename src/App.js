import React, { Component } from 'react'

class App extends Component {
  state = {
      text : ''
  };
  
  onChange = (e) => {
    this.setState({text : e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submitted value : " + this.state.text);
  }
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit = {this.onSubmit.bind(this)}>
          <input type = "text"
          name = "text"
          placeholder = "Enter Value"
          value = {this.state.text}
          onChange = {this.onChange}/>
          <input type = "submit" value = "Add Item" />
        </form>
      </div>
    )
  }
}

export default App;
