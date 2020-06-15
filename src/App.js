import React, { Component } from 'react'

class App extends Component {
  state = {
      text : '',
      itemlist : []
  };
  
  onChange = (e) => {
    this.setState({text : e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submitted value : " + this.state.text);
    // copy current list of items
    const itemlist = [...this.state.itemlist];
    itemlist.push(this.state.text);
    //console.log("List Values : " + this.state.itemlist);
    this.setState({
      itemlist,
      text: ""
    });
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
          <ul>
            {this.state.itemlist.map( item => {
              return (<li>{item}</li>);
            })}
          </ul>
        </form>
      </div>
    )
  }
}

export default App;
